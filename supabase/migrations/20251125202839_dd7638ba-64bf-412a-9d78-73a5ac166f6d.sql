-- Add response field to contact_requests table
ALTER TABLE contact_requests ADD COLUMN IF NOT EXISTS response text;

-- Update status values to be more specific
ALTER TABLE contact_requests DROP CONSTRAINT IF EXISTS contact_requests_status_check;
ALTER TABLE contact_requests ADD CONSTRAINT contact_requests_status_check 
  CHECK (status IN ('pending', 'accepted', 'declined'));

-- Add index for faster queries on recipient_id and status
CREATE INDEX IF NOT EXISTS idx_contact_requests_recipient_status ON contact_requests(recipient_id, status);
CREATE INDEX IF NOT EXISTS idx_contact_requests_sender_status ON contact_requests(sender_id, status);