-- Create security definer function to get user role
CREATE OR REPLACE FUNCTION public.get_user_role(_user_id UUID)
RETURNS TEXT
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT role::text FROM public.profiles WHERE id = _user_id;
$$;

-- Drop and recreate the profiles SELECT policy without recursion
DROP POLICY IF EXISTS "Users can view all profiles" ON public.profiles;

CREATE POLICY "Users can view all profiles"
ON public.profiles
FOR SELECT
USING (
  -- Everyone can see their own profile
  auth.uid() = id OR
  -- Doctors can see all profiles
  public.get_user_role(auth.uid()) = 'doctor' OR
  -- Patients can see other patients
  (role::text = 'patient' AND public.get_user_role(auth.uid()) = 'patient') OR
  -- Patients can see approved donors
  (role::text = 'donor' AND approved_by_doctor = TRUE AND public.get_user_role(auth.uid()) = 'patient') OR
  -- Donors can see patients and other approved donors
  (
    public.get_user_role(auth.uid()) = 'donor' AND
    (role::text = 'patient' OR (role::text = 'donor' AND approved_by_doctor = TRUE))
  )
);