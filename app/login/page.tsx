import { Button } from "@/components/ui/button"
import { signIn } from "@/auth"

export default function SignIn() {
  return (
    <form action={async () => {
        "use server"
        await signIn("github")
      }}
    className="flex items-center justify-center min-h-screen">
      <Button type="submit">Signin with GitHub</Button>
    </form>
  )
} 