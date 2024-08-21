'use client'

import React, { useState } from "react"
import { Input } from "./input"
import { Switch } from "@/components/ui/switch"

const Faucet = () => {
  const [address, setAddress] = useState<string>("")
  const [isTestNet, setIsTestNet] = useState<boolean>(false)

  const handleSwitchChange = (checked: boolean) => {
    setIsTestNet(checked)
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center justify-between rounded-lg border p-3 shadow-sm space-y-4">
        <div className="space-y-0.5">
          <label className="form-label">TestNet</label>
        </div>
        <Switch checked={isTestNet} onCheckedChange={handleSwitchChange} />
        <Input placeholder="enter solana address" value={address} onChange={(e) => setAddress(e.target.value)} />
        <div className="mt-4 p-2 border rounded">
          <p><strong>Address:</strong> {address}</p>
          <p><strong>TestNet:</strong> {isTestNet ? "Enabled" : "Disabled"}</p>
        </div>
      </div>
    </div>
  )
}

export default Faucet