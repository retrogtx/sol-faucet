'use client';

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, ExternalLink, Droplets, Wallet } from 'lucide-react'
import Link from 'next/link'
import { useToast } from "@/components/ui/use-toast"
import { Toast } from "@/components/ui/toast"

const FloatingParticle = ({ index }: { index: number }) => {
  const [position, setPosition] = useState({ x: Math.random() * 100, y: Math.random() * 100 })
  const [size] = useState(Math.random() * 4 + 1)
  const [speed] = useState(Math.random() * 0.5 + 0.1)

  useEffect(() => {
    const animateParticle = () => {
      setPosition(prev => ({
        x: (prev.x + speed) % 100,
        y: prev.y
      }))
    }

    const intervalId = setInterval(animateParticle, 50)
    return () => clearInterval(intervalId)
  }, [speed])

  return (
    <div
      className="absolute rounded-full bg-white opacity-90"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        width: `${size}px`,
        height: `${size}px`,
        zIndex: 1,
      }}
    />
  )
}

export default function Component() {
  const { toast } = useToast()
  const [particles] = useState(Array.from({ length: 50 }, (_, i) => i))

  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        {particles.map((index) => (
          <FloatingParticle key={index} index={index} />
        ))}
      </div>
      <header className="px-4 lg:px-6 h-14 flex items-center border-b border-gray-800 relative z-10">
        <Link className="flex items-center justify-center" href="#">
          <svg className="h-6 w-6" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
            <path d="M93.94 42.63H13.78l20.28-35.12h80.16L93.94 42.63zM43.63 88.78l-29.85-51.7h80.16l29.85 51.7H43.63zm70.59 31.59H34.06L13.78 85.25h80.16l20.28 35.12z" fill="#00FFA3"/>
          </svg>
          <span className="sr-only">Solana Dev Tools</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="/faq">
          <Button className="text-sm font-medium hover:text-gray-400">
            FAQ
          </Button>
          </Link>
          <Button className="text-sm font-medium hover:text-gray-400"  onClick={() => {
            toast({
              description: "Coming soon. Use our other tools until then!",
            })
          }}>
            Other Tools
          </Button>
        </nav>
      </header>
      <main className="flex-1 relative z-10">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Solana Developer Tools
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                  Everything you need to build on Solana as a developer.
                </p>
              </div>
              <div className="space-x-4">
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 shadow transition-colors hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-300 disabled:pointer-events-none disabled:opacity-50"
                  href="https://solana.com/developers"
                >
                  Get Started
                </Link>
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md border border-gray-800 bg-gray-950 px-4 py-2 text-sm font-medium text-gray-300 shadow-sm transition-colors hover:bg-gray-800 hover:text-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-300 disabled:pointer-events-none disabled:opacity-50"
                  href="https://docs.solana.com/"
                >
                  Documentation
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">Key Features</h2>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Essential tools to kickstart your Solana development journey.
                </p>
              </div>
              <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem]">
                <Card className="bg-gray-800 border-gray-700">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-lg font-medium text-white">Test SOL Faucet</CardTitle>
                    <Droplets className="h-4 w-4 text-gray-400" />
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-400">Get test SOL tokens instantly for your development and testing needs. Our faucet provides a seamless way to fund your test wallets.</p>
                  </CardContent>
                  <CardFooter>
                    <Link
                      className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-300 disabled:pointer-events-none disabled:opacity-50 border border-gray-700 bg-gray-900 text-gray-300 shadow-sm hover:bg-gray-800 hover:text-gray-100 h-9 px-4 py-2 w-full"
                      href="/faucet"
                    >
                      Access Faucet
                    </Link>
                  </CardFooter>
                </Card>
                <Card className="bg-gray-800 border-gray-700">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-lg font-medium text-white">Wallet Generator</CardTitle>
                    <Wallet className="h-4 w-4 text-gray-400" />
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-400">Create new Solana wallets effortlessly for your projects. Our wallet generator ensures secure and unique addresses for your applications.</p>
                  </CardContent>
                  <CardFooter>
                    <Link
                      className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-300 disabled:pointer-events-none disabled:opacity-50 border border-gray-700 bg-gray-900 text-gray-300 shadow-sm hover:bg-gray-800 hover:text-gray-100 h-9 px-4 py-2 w-full"
                      href="/wallet"
                    >
                      Generate Wallet
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section id="tools" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">Other Useful Tools</h2>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore more tools to enhance your Solana development experience.
                </p>
              </div>
              <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem]">
                <Card className="bg-gray-800 border-gray-700">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-white">Explorer</CardTitle>
                    <Code className="h-4 w-4 text-gray-400" />
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-gray-400">Explore transactions and accounts</p>
                  </CardContent>
                  <CardFooter>
                    <Link
                      className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-300 disabled:pointer-events-none disabled:opacity-50 border border-gray-700 bg-gray-900 text-gray-300 shadow-sm hover:bg-gray-800 hover:text-gray-100 h-9 px-4 py-2 w-full"
                      href="https://explorer.solana.com/"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Open Explorer
                    </Link>
                  </CardFooter>
                </Card>
                <Card className="bg-gray-800 border-gray-700">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-white">Playground</CardTitle>
                    <Code className="h-4 w-4 text-gray-400" />
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-gray-400">Interactive Solana coding environment</p>
                  </CardContent>
                  <CardFooter>
                    <Link
                      className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-300 disabled:pointer-events-none disabled:opacity-50 border border-gray-700 bg-gray-900 text-gray-300 shadow-sm hover:bg-gray-800 hover:text-gray-100 h-9 px-4 py-2 w-full"
                      href="https://beta.solpg.io/"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Open Playground
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-800 relative z-10">
        <p className="text-xs text-gray-400">© 2024 Solana Dev Tools. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-gray-400 hover:text-gray-100" href="https://x.com/amritwt">
            Twitter
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-gray-400 hover:text-gray-100" href="https://github.com/retrogtx">
            Github
          </Link>
        </nav>
      </footer>
    </div>
  )
}