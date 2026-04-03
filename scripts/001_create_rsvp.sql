-- Create RSVP table for wedding guests
CREATE TABLE IF NOT EXISTS public.rsvp (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  attendance TEXT NOT NULL CHECK (attendance IN ('hadir', 'tidak')),
  guests INTEGER DEFAULT 1,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS but allow public inserts and reads (no auth required for wedding RSVP)
ALTER TABLE public.rsvp ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert RSVP (public wedding invitation)
CREATE POLICY "Allow public insert" ON public.rsvp 
  FOR INSERT 
  WITH CHECK (true);

-- Allow anyone to read RSVPs
CREATE POLICY "Allow public read" ON public.rsvp 
  FOR SELECT 
  USING (true);
