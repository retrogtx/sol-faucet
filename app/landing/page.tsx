'use client';
import { useState, useEffect } from 'react';
import supabase from "../../supabase/client";
import { User } from '@supabase/supabase-js';
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Landing() {
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
    try {
      console.log('Redirecting to:', `${window.location.origin}/auth/callback`);
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'github',
        options: {
          redirectTo: window.location.origin + '/profile'
        }
      });
      if (error) throw error;
    } catch (error) {
      console.error('Error signing in with GitHub:', error);
    }
  }

  async function signOut() {
    await supabase.auth.signOut();
    setUser(null);
  }
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <CuboidIcon className="h-6 w-6 text-primary" />
            <span className="font-bold">Bounty Dispenser</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="rounded-md px-4 py-2 text-sm font-medium text-primary hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              prefetch={false}
            >
              Docs
            </Link>
            <Button variant="secondary" onClick={signInWithGithub}>
              <GitlabIcon className="h-4 w-4 mr-2" />
              Login with GitHub
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="container mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Solve bounties. Get paid. Available in Kashmir too.
              </h1>
              <p className="text-muted-foreground">
              Get paid through crypto so that even Kashmiris get access to it.
              </p>
              <div className="flex gap-4">
                <Button>Just a parody at this point</Button>
                <Button variant="secondary">Made this in a rush</Button>
              </div>
            </div>
            <div className="rounded-xl bg-muted p-6 shadow-lg">
              <h2 className="mb-4 text-2xl font-bold">FAQ</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium">how does it work?</h3>
                  <p className="text-muted-foreground">
                    You solve issues created by other developers, while you are at it, you get paid in crypto once you solve it. Atleast that's what I'm trying to make by the end of this month.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium">How can I get paid?</h3>
                  <p className="text-muted-foreground">
                    Abhi maine khud try nahi kiya hai, but will implement soon.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium">Is my data secure on the Web3 platform?</h3>
                  <p className="text-muted-foreground">
                    Absolutely, all your crypto investment has vanished anyway. Aur suno Tanmay Bhat ki advise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-muted py-6">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">&copy; 2024, made by Amrit. </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground" prefetch={false}>
                No Privacy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground" prefetch={false}>
                No Terms
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function CuboidIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m21.12 6.4-6.05-4.06a2 2 0 0 0-2.17-.05L2.95 8.41a2 2 0 0 0-.95 1.7v5.82a2 2 0 0 0 .88 1.66l6.05 4.07a2 2 0 0 0 2.17.05l9.95-6.12a2 2 0 0 0 .95-1.7V8.06a2 2 0 0 0-.88-1.66Z" />
      <path d="M10 22v-8L2.25 9.15" />
      <path d="m10 14 11.77-6.87" />
    </svg>
  )
}


function GitlabIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z" />
    </svg>
  )
}
