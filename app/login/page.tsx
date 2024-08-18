import { Button } from "@/components/ui/button"
import { auth, signIn, signOut} from "@/auth"

export default function SignIn() {
  return (
    <div>
      <form action={async () => {
          "use server"
          await signIn("github")
        }}
      className="flex items-center justify-center min-h-screen">
        <Button type="submit">Signin with GitHub</Button>
      </form>
    </div>
  );
} 