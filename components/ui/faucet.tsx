'use client'

import React, { useState } from "react"
import { Input } from "./input"
import { Switch } from "@/components/ui/switch" // Adjust the import path as necessary

const Faucet = () => {
  const [address, setAddress] = useState<string>("")
  const [isTestNet, setIsTestNet] = useState<boolean>(false)

  const handleSwitchChange = (checked: boolean) => {
    setIsTestNet(checked)
  }

  return (
    <>
      <div className="flex flex items-center justify-between rounded-lg border p-3 shadow-sm">
        <div className="space-y-0.5">
          <label className="form-label">TestNet</label>
        </div>
        <Switch checked={isTestNet} onCheckedChange={handleSwitchChange} />
      </div>
      <Input placeholder="enter solana address" value={address} onChange={(e) => setAddress(e.target.value)} />
    </>
  )
}

export default Faucet