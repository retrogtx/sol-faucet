"use client"

import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

export default function ToastWithTitle() {
  const { toast } = useToast()

  return (
    <Button
      variant="outline"
      onClick={() => {
        console.log("Button clicked")
        toast({
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
        })
        console.log("Toast function called")
      }}
    >
      Show Toast
    </Button>
  )
}
