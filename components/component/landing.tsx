import Link from "next/link"
import { Button } from "@/components/ui/button"

export function landing() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <CuboidIcon className="h-6 w-6 text-primary" />
            <span className="font-bold">Web3 App</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="rounded-md px-4 py-2 text-sm font-medium text-primary hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              prefetch={false}
            >
              Docs
            </Link>
            <Button variant="secondary">
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
                Revolutionize Your Web3 Experience
              </h1>
              <p className="text-muted-foreground">
                Discover the power of our cutting-edge Web3 platform. Seamlessly integrate blockchain technology into
                your applications and unlock new possibilities.
              </p>
              <div className="flex gap-4">
                <Button>Get Started</Button>
                <Button variant="secondary">Learn More</Button>
              </div>
            </div>
            <div className="rounded-xl bg-muted p-6 shadow-lg">
              <h2 className="mb-4 text-2xl font-bold">FAQ</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium">What is Web3 and how does it work?</h3>
                  <p className="text-muted-foreground">
                    Web3 is the next evolution of the internet, built on decentralized blockchain technology. It enables
                    secure, transparent, and peer-to-peer transactions without the need for centralized intermediaries.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium">How can I integrate Web3 into my application?</h3>
                  <p className="text-muted-foreground">
                    Our platform provides a suite of tools and APIs to seamlessly integrate Web3 functionality into your
                    existing applications. Get started with our comprehensive documentation and developer resources.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium">Is my data secure on the Web3 platform?</h3>
                  <p className="text-muted-foreground">
                    Absolutely. Web3 is built on the principles of decentralization and cryptography, ensuring the
                    highest levels of data security and privacy. Your information is protected by the blockchain's
                    immutable ledger.
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
            <p className="text-sm text-muted-foreground">&copy; 2024 Web3 App. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground" prefetch={false}>
                Privacy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground" prefetch={false}>
                Terms
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
