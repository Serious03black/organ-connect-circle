import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { User, Mail, Phone, MapPin, Calendar, CheckCircle, XCircle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface PendingDonor {
  id: string;
  full_name: string;
  email: string;
  phone: string | null;
  location: string | null;
  age: number | null;
  blood_type: string | null;
  medical_history: string | null;
  created_at: string;
}

const DoctorApprovals = () => {
  const [pendingDonors, setPendingDonors] = useState<PendingDonor[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    fetchPendingDonors();
  }, []);

  const fetchPendingDonors = async () => {
    try {
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("role", "donor")
        .eq("approved_by_doctor", false)
        .order("created_at", { ascending: false });

      if (error) throw error;
      setPendingDonors(data || []);
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to fetch pending donors",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleApprove = async (donorId: string) => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("Not authenticated");

      const { error } = await supabase
        .from("profiles")
        .update({
          approved_by_doctor: true,
          approved_at: new Date().toISOString(),
          approved_by: user.id,
        })
        .eq("id", donorId);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Donor approved successfully",
      });

      fetchPendingDonors();
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to approve donor",
        variant: "destructive",
      });
    }
  };

  const handleReject = async (donorId: string) => {
    try {
      const { error } = await supabase
        .from("profiles")
        .delete()
        .eq("id", donorId);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Donor registration rejected",
      });

      fetchPendingDonors();
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to reject donor",
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return (
      <Card>
        <CardContent className="py-12 text-center">
          <p className="text-muted-foreground">Loading pending approvals...</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Pending Donor Approvals</h2>
          <p className="text-muted-foreground">
            {pendingDonors.length} donor(s) waiting for approval
          </p>
        </div>
      </div>

      {pendingDonors.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center">
            <p className="text-muted-foreground">No pending donor approvals</p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {pendingDonors.map((donor) => (
            <Card
              key={donor.id}
              className="hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => navigate(`/donor/${donor.id}`)}
            >
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <User className="w-5 h-5" />
                      {donor.full_name}
                    </CardTitle>
                    <CardDescription>
                      Applied on {new Date(donor.created_at).toLocaleDateString()}
                    </CardDescription>
                  </div>
                  <Badge variant="secondary">Pending</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {donor.email && (
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="w-4 h-4 text-muted-foreground" />
                      <span>{donor.email}</span>
                    </div>
                  )}
                  {donor.phone && (
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="w-4 h-4 text-muted-foreground" />
                      <span>{donor.phone}</span>
                    </div>
                  )}
                  {donor.location && (
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span>{donor.location}</span>
                    </div>
                  )}
                  {donor.age && (
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span>{donor.age} years old</span>
                    </div>
                  )}
                  {donor.blood_type && (
                    <div className="text-sm">
                      <span className="font-medium">Blood Type:</span> {donor.blood_type}
                    </div>
                  )}
                </div>

                {donor.medical_history && (
                  <div className="pt-3 border-t">
                    <p className="text-sm font-medium mb-1">Medical History</p>
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {donor.medical_history}
                    </p>
                  </div>
                )}

                <div
                  className="flex gap-2 pt-3"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Button
                    onClick={() => handleApprove(donor.id)}
                    className="flex-1"
                    variant="default"
                  >
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Approve
                  </Button>
                  <Button
                    onClick={() => handleReject(donor.id)}
                    className="flex-1"
                    variant="destructive"
                  >
                    <XCircle className="w-4 h-4 mr-2" />
                    Reject
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default DoctorApprovals;