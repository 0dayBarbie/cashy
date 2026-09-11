-- Create help_requests table for Cashy's Legacy pet assistance form submissions
CREATE TABLE IF NOT EXISTS public.help_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  
  -- Contact Information
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  preferred_contact TEXT CHECK (preferred_contact IN ('phone', 'email', 'text')),
  
  -- Pet Information
  pet_name TEXT NOT NULL,
  animal_type TEXT NOT NULL,
  breed TEXT,
  age TEXT,
  weight TEXT,
  
  -- Emergency Details
  current_situation TEXT NOT NULL,
  issue_start_date TEXT,
  seen_by_vet BOOLEAN DEFAULT FALSE,
  vet_diagnosis TEXT,
  vet_clinic_name TEXT,
  has_cost_estimate BOOLEAN DEFAULT FALSE,
  estimated_cost DECIMAL(10, 2),
  
  -- Financial Information
  can_cover_partial BOOLEAN DEFAULT FALSE,
  assistance_type TEXT[] DEFAULT '{}',
  financial_situation TEXT,
  
  -- Status tracking
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'reviewing', 'approved', 'completed', 'declined')),
  notes TEXT
);

-- Enable Row Level Security
ALTER TABLE public.help_requests ENABLE ROW LEVEL SECURITY;

-- Since this is a public form (no auth required), we need a policy that allows inserts
-- But only admins should be able to read/update/delete
CREATE POLICY "Anyone can submit help requests" 
  ON public.help_requests 
  FOR INSERT 
  WITH CHECK (true);

-- For now, allow all reads (you can restrict this later with admin auth)
CREATE POLICY "Allow reading help requests" 
  ON public.help_requests 
  FOR SELECT 
  USING (true);

-- Create an index for faster queries
CREATE INDEX IF NOT EXISTS help_requests_created_at_idx ON public.help_requests(created_at DESC);
CREATE INDEX IF NOT EXISTS help_requests_status_idx ON public.help_requests(status);
CREATE INDEX IF NOT EXISTS help_requests_email_idx ON public.help_requests(email);
