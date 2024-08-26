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
        description: `Please check your wallet. Txn Hash:  ${confirmation}`
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
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-800 to-black">
      <div className="bg-gradient-to-r from-black to-gray-800 rounded-xl shadow-2xl p-8 w-96 space-y-6">
        <h2 className="text-3xl font-bold text-center text-gray-400 mb-6">Solana Faucet</h2>
        
        <div className="flex items-center justify-between">
          <span className="text-lg font-medium text-white-700">Network:</span>
          <div className="flex items-center space-x-2">
            <span className={`text-sm ${isTestNet ? 'text-gray-300' : 'text-gray-800 font-semibold'}`}>DevNet</span>
            <Switch 
              checked={isTestNet} 
              onCheckedChange={handleSwitchChange}
              className="bg-gray-300 data-[state=checked]:bg-gray-300"
            />
            <span className={`text-sm ${isTestNet ? 'text-gray-800 font-semibold' : 'text-gray-300'}`}>TestNet</span>
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-500">Solana Address</label>
          <Input 
            placeholder="Enter Solana address" 
            value={address} 
            onChange={(e) => setAddress(e.target.value)}
            className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 text-gray-800"
          />
        </div>

        <div className="bg-gray-200 rounded-md p-3">
          <p className="text-sm text-gray-700 font-medium">You will receive 1 SOL (Limit: 1 per day)</p>
        </div>

        <Button 
          disabled={!isValid} 
          onClick={handleRequestAirdrop}
          className="w-full py-2 px-4 bg-gray-700 hover:bg-gray-800 text-white font-semibold rounded-md transition duration-300 ease-in-out disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Request Airdrop
        </Button>
      </div>
    </div>
  )
}

export default Faucet