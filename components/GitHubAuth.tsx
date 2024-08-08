'use client'

import { useState } from 'react'
import { supabase } from '../utils/supabaseClient'
import { Provider } from '@supabase/supabase-js'
import Image from 'next/image'

const GitHubAuth: React.FC = () => {
  const [session, setSession] = useState<{ provider: Provider; url: string } | null>(null)

  const handleGitHubSignIn = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'github',
      })

      if (error) throw error
      if (data) {
        setSession(data)
      }
      // Handle successful sign-in
    } catch (error) {
      console.error('Error signing in with GitHub:', error)
      // Handle sign-in error
    }
  }

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut()
      setSession(null)
      // Handle successful sign-out
    } catch (error) {
      console.error('Error signing out:', error)
      // Handle sign-out error
    }
  }

  return (
    <div>
      {session ? (
        <div className="flex items-center gap-2">
          <span>Signed in with {session.provider}</span>
          <button
            className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      ) : (
        <button
          className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded flex items-center gap-2"
          onClick={handleGitHubSignIn}
        >
          <Image src="/github.svg" alt="GitHub" width={24} height={24} />
          Sign In with GitHub
        </button>
      )}
    </div>
  )
}

export default GitHubAuth