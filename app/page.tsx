import Faucet from "@/components/ui/faucet";

export default function Home() {
 return (
  <div>
    <Faucet />
    <footer className="py-2 text-center text-sm text-gray-600">
      <p>
        made by <a href="https://x.com/amritwt" className="text-blue-500 hover:underline">amritwt :)</a>
      </p>
    </footer>
  </div>
 )
}