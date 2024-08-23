'use client'

import React, { useEffect, useState } from "react"
import { Input } from "./input"
import { Switch } from "@/components/ui/switch"
import { PublicKey, Connection } from "@solana/web3.js"
import { Button } from "./button"
import { useToast } from "@/components/ui/use-toast"


const Faucet = () => {
  const [address, setAddress] = useState<string>("")
  const [isTestNet, setIsTestNet] = useState<boolean>(false)
  const [isValid, setIsValid] = useState<boolean>(false)
  const { toast } = useToast();

  const handleSwitchChange = (checked: boolean) => {
    setIsTestNet(checked)
  }

  const validateAddress = (address: string) => {
    let publicKey: PublicKey;
    try {
      publicKey = new PublicKey(address)
      return PublicKey.isOnCurve(publicKey.toBytes())
    } catch (err) {
      console.log(err);
      return false
    }
  }

  useEffect(() => {
    const isValid = validateAddress(address);
    setIsValid(isValid);
  }, [address])

  const requestAirdrop = async (address: string) => {
    try {
      const NODE_RPC = isTestNet? "https://api.testnet.solana.com" : "https://api.devnet.solana.com";
      const CONNECTION = new Connection(NODE_RPC, "confirmed");
      const confirmation = await CONNECTION.requestAirdrop(new PublicKey(address), 1000000000);
      toast({
        title: "Airdrop successful !",
        description: `Please check your wallet/solana explorer. Txn Hash:  ${confirmation}`
      });
      setAddress("");
    }  
    catch (err) {
      console.log(err);
      toast({
        title: "Airdrop failed!",
        description: `Too many transactions, please try again in 1D.`
      });
      return false;
    }
  }

  const handleRequestAirdrop = () => {
    requestAirdrop(address);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center justify-between rounded-lg border p-3 shadow-sm space-y-4">
        <div className="space-y-0.5">
          <label className="form-label">1 Sol in 1 Day</label>
        </div>
        <Switch checked={isTestNet} onCheckedChange={handleSwitchChange} />
        <Input placeholder="enter solana address" value={address} onChange={(e) => setAddress(e.target.value)} />
        <div className="mt-4 p-2 border rounded">
          <p>{isTestNet ? "TestNet" : "DevNet"}</p>
        </div>
        <Button disabled={!isValid} onClick={handleRequestAirdrop}>Request</Button>
      </div>
    </div>
  )
}

export default Faucet