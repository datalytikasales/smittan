// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://nwpszbqsslcqhvwoldec.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im53cHN6YnFzc2xjcWh2d29sZGVjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ3MTM2OTksImV4cCI6MjA1MDI4OTY5OX0.MLG4CWsTt00_YXPy8IaW-NwlJQwtR_nNQnx-HB-rgfw";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);