import { createClient } from '@supabase/supabase-js';

// Anon client for general clientside/serverside use
export const supabase = createClient(
  import.meta.env.PUBLIC_SUPABASE_URL,
  import.meta.env.PUBLIC_SUPABASE_ANON_KEY
);

// Admin client with service role key for backend/admin operations
export const supabaseAdmin = createClient(
  process.env.SUPABASE_URL || import.meta.env.PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);
