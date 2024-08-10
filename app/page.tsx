'use client';
import { useState, useEffect } from 'react';
import supabase from "../supabase/client";
import { User } from '@supabase/supabase-js';
import Button from '@/components/Button';

export default function Home() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    checkUser();
    window.addEventListener('hashchange', checkUser);

    return () => {
      window.removeEventListener('hashchange', checkUser);
    };
  }, []);

  async function checkUser() {
    const { data: { user } } = await supabase.auth.getUser();
    setUser(user);
  }

  async function signInWithGithub() {
    await supabase.auth.signInWithOAuth({
      provider: 'github'
    });
  }

  async function signOut() {
    await supabase.auth.signOut();
    setUser(null);
  }

  return (
    <div className="App flex justify-center items-center min-h-screen">
      {user ? (
        <>
          <h1>Hello, {user.email}</h1>
          <button onClick={signOut}>Sign out</button>
        </>
      ) : (
        <div className='text-center'>
          <h1>Welcome to the Web3 Bounty Facilitator</h1>
          <Button  onClick={signInWithGithub}>Sign in with GitHub</Button>
        </div>
      )}
    </div>
  );
}