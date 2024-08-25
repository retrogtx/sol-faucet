'use client';

import { useState } from "react";
import { generateMnemonic } from "bip39";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast"

export default function Wallet() {
    const [mnemonic, setMnemonic] = useState("");
    const { toast } = useToast();
    const copyToClipboard = () => {
        navigator.clipboard.writeText(mnemonic);
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh'
        }}>
            <Button onClick={async function() {
                const mn = await generateMnemonic();
                setMnemonic(mn);
            }}>
                Create Seed Phrase
            </Button>
            <input type="text" value={mnemonic} readOnly className="mt-2 w-full max-w-lg overflow-hidden text-ellipsis whitespace-nowrap" />
            <Button
      variant="outline"
      onClick={() => {
        copyToClipboard();
        toast({
          description: "Seed phrase has been copied.",
        })
      }}
    >
      Copy
    </Button>
        </div>
    );
}