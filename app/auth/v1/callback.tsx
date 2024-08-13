import { useEffect } from 'react';
import { useRouter } from 'next/router';
import supabase from '../../../supabase/client';

export default function AuthCallback() {
  const router = useRouter();

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN' && session) {
        router.push('/landing');
      }
    });

    return () => {
      if (authListener?.subscription) authListener.subscription.unsubscribe();
    };
  }, [router]);

  return <div>Processing authentication...</div>;
}