import { createSupabaseServerClient } from '../../../lib/supabaseSSR';

export const prerender = false;

export async function POST(context) {
  const supabase = createSupabaseServerClient(context);

  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error('Logout error:', error);
  }

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
