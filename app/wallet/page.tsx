'use client';

import { useState, useEffect } from "react";
import { generateMnemonic } from "bip39";
import * as ed25519 from '@noble/ed25519';
import { sha512 } from '@noble/hashes/sha512';
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

ed25519.etc.sha512Sync = (...m) => sha512(ed25519.etc.concatBytes(...m));

interface Wallet {
  publicKey: string;
  privateKey: string;
}


export default function Wallet() {
    const [mnemonic, setMnemonic] = useState("");
    const [wallets, setWallets] = useState<Wallet[]>([]);
    const { toast } = useToast();

    const generateWallet = async () => {
        const privateKey = ed25519.utils.randomPrivateKey();
        const publicKey = await ed25519.getPublicKey(privateKey);
        return {
            publicKey: Buffer.from(publicKey).toString('hex'),
            privateKey: Buffer.from(privateKey).toString('hex')
        };
    };

    const addWallet = async () => {
        const newWallet = await generateWallet();
        setWallets([...wallets, newWallet]);
        toast({
            description: "New wallet created.",
        });
    };

    const deleteWallet = (index: number) => {
        const updatedWallets = wallets.filter((_, i) => i !== index);
        setWallets(updatedWallets);
        toast({
            description: "Wallet deleted.",
        });
    };

    const deleteSeedPhrase = () => {
        setMnemonic("");
        toast({
            description: "Seed phrase deleted.",
        });
    };

    const deleteAll = () => {
        setMnemonic("");
        setWallets([]);
        toast({
            description: "All data deleted.",
        }); 
    };

    return (
        <div className="container mx-auto p-4">
            <Card className="mb-4">
                <CardHeader>
                    <CardTitle>Seed Phrase</CardTitle>
                </CardHeader>
                <CardContent>
                    <Button onClick={async function() {
                        const mn = await generateMnemonic();
                        setMnemonic(mn);
                    }} className="mb-2">
                        Create Seed Phrase
                    </Button>
                    <Input value={mnemonic} readOnly className="mb-2" />
                    <div className="flex space-x-2">
                        <Button
                            variant="outline"
                            onClick={() => {
                                navigator.clipboard.writeText(mnemonic);
                                toast({
                                    description: "Seed phrase has been copied.",
                                })
                            }}
                        >
                            Copy
                        </Button>
                        <Button variant="destructive" onClick={deleteSeedPhrase}>
                            Delete Seed Phrase
                        </Button>
                    </div>
                </CardContent>
            </Card>

            <Card className="mb-4">
                <CardHeader>
                    <CardTitle>Wallets</CardTitle>
                </CardHeader>
                <CardContent>
                    <Button onClick={addWallet} className="mb-4">Create New Wallet</Button>
                    {wallets.map((wallet, index) => (
                        <div key={index} className="mb-4 p-4 border rounded">
                            <p>Public Key: {wallet.publicKey}</p>
                            <p>Private Key: {wallet.privateKey}</p>
                            <Button variant="destructive" onClick={() => deleteWallet(index)} className="mt-2">
                                Delete Wallet
                            </Button>
                        </div>
                    ))}
                </CardContent>
            </Card>

            <Button variant="destructive" onClick={deleteAll}>
                Delete All Data
            </Button>
        </div>
    );
}