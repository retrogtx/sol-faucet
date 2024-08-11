import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { JSX, SVGProps } from "react"

export default function dispenser() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0e1117] text-[#c9d1d9] font-['Fira Code', 'monospace']">
      <header className="flex items-center justify-between px-6 py-4">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <BitcoinIcon className="h-6 w-6 text-[#58a6ff]" />
          <span className="text-xl font-bold">Bounty Dispenser</span>
        </Link>
        <div className="flex items-center gap-4">
          <Link href="#" className="hover:text-[#58a6ff]" prefetch={false}>
            Leaderboard
          </Link>
          <Button
            variant="outline"
            className="rounded-md px-4 py-2 text-[#58a6ff] hover:bg-[#30363d] transition-colors duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          >
            Sign In
          </Button>
          <Button className="rounded-md bg-[#58a6ff] px-4 py-2 text-[#0e1117] hover:bg-[#4c8eff] transition-colors duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            Sign Up
          </Button>
        </div>
      </header>
      <main className="flex-1 px-6 py-12">
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="space-y-4 text-center">
            <h1 className="text-4xl font-bold">Earn Crypto for Your Skills</h1>
            <p className="text-lg text-[#8b949e]">
              Participate in our Web3 bounty program and get rewarded for your contributions.
            </p>
          </div>
          <div className="rounded-md border border-[#30363d] p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">Current Bounty</h2>
                <p className="text-lg text-[#8b949e]">Build a decentralized application for our platform</p>
              </div>
              <div className="flex items-center gap-2">
                <EclipseIcon className="h-6 w-6 text-[#8b949e]" />
                <span className="text-2xl font-bold">1.5 ETH</span>
              </div>
            </div>
            <Separator className="my-6" />
            <div className="flex items-center justify-between">
              <Button
                variant="outline"
                className="rounded-md px-4 py-2 text-[#58a6ff] hover:bg-[#30363d] transition-colors duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              >
                View Details
              </Button>
              <Button className="rounded-md bg-[#58a6ff] px-4 py-2 text-[#0e1117] hover:bg-[#4c8eff] transition-colors duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                Claim Bounty
              </Button>
            </div>
          </div>
          <div className="rounded-md border border-[#30363d] p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">Leaderboard</h2>
                <p className="text-lg text-[#8b949e]">Check out the top contributors</p>
              </div>
              <Link
                href="#"
                className="text-[#58a6ff] hover:underline transition-colors duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                prefetch={false}
              >
                View All
              </Link>
            </div>
            <Separator className="my-6" />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-md bg-[#30363d] p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-[#8b949e] p-2 text-[#0e1117]">1</div>
                    <div>
                      <div className="font-bold">John Doe</div>
                      <div className="text-[#8b949e]">5.2 ETH</div>
                    </div>
                  </div>
                  <EclipseIcon className="h-6 w-6 text-[#8b949e]" />
                </div>
              </div>
              <div className="rounded-md bg-[#30363d] p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-[#8b949e] p-2 text-[#0e1117]">2</div>
                    <div>
                      <div className="font-bold">Jane Smith</div>
                      <div className="text-[#8b949e]">4.8 ETH</div>
                    </div>
                  </div>
                  <EclipseIcon className="h-6 w-6 text-[#8b949e]" />
                </div>
              </div>
              <div className="rounded-md bg-[#30363d] p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-[#8b949e] p-2 text-[#0e1117]">3</div>
                    <div>
                      <div className="font-bold">Bob Johnson</div>
                      <div className="text-[#8b949e]">4.2 ETH</div>
                    </div>
                  </div>
                  <EclipseIcon className="h-6 w-6 text-[#8b949e]" />
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-md border border-[#30363d] p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">Q&A</h2>
                <p className="text-lg text-[#8b949e]">Have questions? We've got answers.</p>
              </div>
            </div>
            <Separator className="my-6" />
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold">What is a bounty?</h3>
                <p className="text-[#8b949e]">
                  A bounty is a reward offered for completing a specific task or solving a problem. In the context of
                  our platform, bounties are offered for contributions to our Web3 ecosystem, such as building
                  decentralized applications, improving existing projects, or finding and reporting bugs.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold">How do I claim a bounty?</h3>
                <p className="text-[#8b949e]">
                  To claim a bounty, you'll need to complete the specified task and submit your work for review. Once
                  your submission is approved, you'll receive the reward in the form of cryptocurrency, typically
                  Ethereum (ETH). The process is designed to be straightforward and transparent.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold">What are the requirements to participate?</h3>
                <p className="text-[#8b949e]">
                  To participate in our bounty program, you'll need to have a basic understanding of blockchain
                  technology and be able to demonstrate your skills in areas such as software development, design, or
                  security. You'll also need to create an account on our platform and connect your cryptocurrency
                  wallet.
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-md border border-[#30363d] p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">Additional Information</h2>
                <p className="text-lg text-[#8b949e]">Learn more about our bounty program and how it works.</p>
              </div>
            </div>
            <Separator className="my-6" />
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold">Why should I participate?</h3>
                <p className="text-[#8b949e]">
                  Participating in our bounty program is a great way to contribute to the growth and development of the
                  Web3 ecosystem, while also earning cryptocurrency rewards for your efforts. It's an opportunity to
                  showcase your skills, gain recognition, and potentially collaborate with other talented individuals.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold">What types of tasks are available?</h3>
                <p className="text-[#8b949e]">
                  We offer a wide range of bounties, from building decentralized applications and smart contracts to
                  improving existing projects, conducting security audits, and even creating educational content. The
                  tasks are designed to cater to developers, designers, and other Web3 enthusiasts with diverse skill
                  sets.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold">How are bounties funded and distributed?</h3>
                <p className="text-[#8b949e]">
                  Our bounty program is funded through a combination of community contributions and platform revenue.
                  The rewards are paid out in Ethereum (ETH), which is a widely-adopted cryptocurrency. The distribution
                  process is transparent and secure, ensuring that successful contributors receive their rewards in a
                  timely manner.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-[#30363d] px-6 py-4">
        <div className="mx-auto max-w-3xl text-center text-sm text-[#8b949e]">
          &copy; 2024 Bounty Dispenser. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

function BitcoinIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727" />
    </svg>
  )
}


function EclipseIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a7 7 0 1 0 10 10" />
    </svg>
  )
}
