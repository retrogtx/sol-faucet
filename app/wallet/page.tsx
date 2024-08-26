'use client';

import { useState } from "react";
import { generateMnemonic, mnemonicToSeedSync } from "bip39";
import * as ed25519 from '@noble/ed25519';
import { sha512 } from '@noble/hashes/sha512';
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EyeIcon, EyeOffIcon, CopyIcon, TrashIcon, PlusIcon } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface Wallet {
  publicKey: string;
  privateKey: string;
}

export default function Wallet() {
    const [mnemonic, setMnemonic] = useState("");
    const [wallets, setWallets] = useState<Wallet[]>([]);
    const [showPrivateKey, setShowPrivateKey] = useState<boolean[]>([]);
    const { toast } = useToast();

    ed25519.etc.sha512Sync = (...m) => sha512(ed25519.etc.concatBytes(...m));

    const generateWallet = async (seed: Uint8Array, index: number) => {
        const indexBuffer = new Uint8Array(4);
        indexBuffer[0] = (index >> 24) & 255;
        indexBuffer[1] = (index >> 16) & 255;
        indexBuffer[2] = (index >> 8) & 255;
        indexBuffer[3] = index & 255;

        const combinedArray = new Uint8Array(seed.length + indexBuffer.length);
        combinedArray.set(seed);
        combinedArray.set(indexBuffer, seed.length);

        const derivedPrivateKey = sha512(combinedArray).slice(0, 32);
        const publicKey = await ed25519.getPublicKey(derivedPrivateKey);

        return {
            publicKey: Buffer.from(publicKey).toString('hex'),
            privateKey: Buffer.from(derivedPrivateKey).toString('hex')
        };
    };

    const createSeedPhrase = async () => {
        const mn = generateMnemonic();
        setMnemonic(mn);
        const seed = mnemonicToSeedSync(mn);
        const newWallet = await generateWallet(seed, 0);
        setWallets([newWallet]);
        setShowPrivateKey([false]);
        toast({
            description: "New seed phrase and wallet created.",
        });
    };

    const addWallet = async (mn: string = mnemonic) => {
        if (!mn) {
            toast({
                description: "Please create a seed phrase first.",
                variant: "destructive",
            });
            return;
        }
        const seed = mnemonicToSeedSync(mn);
        const walletIndex = wallets.length;
        const newWallet = await generateWallet(seed, walletIndex);
        setWallets(prev => [...prev, newWallet]);
        setShowPrivateKey(prev => [...prev, false]);
        toast({
            description: "New wallet added.",
        });
    };

    const copyToClipboard = (text: string, description: string) => {
        navigator.clipboard.writeText(text);
        toast({
            description: description,
        });
    };

    const deleteAll = () => {
        setMnemonic("");
        setWallets([]);
        setShowPrivateKey([]);
        toast({
            description: "All data deleted.",
        }); 
    };

    const deleteWallet = (index: number) => {
        setWallets(prev => prev.filter((_, i) => i !== index));
        setShowPrivateKey(prev => prev.filter((_, i) => i !== index));
        toast({
            description: "Wallet deleted.",
        });
    };

    const togglePrivateKeyVisibility = (index: number) => {
        setShowPrivateKey(prev => prev.map((show, i) => i === index ? !show : show));
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-gray-800 to-gray-900 py-8 px-4">
            <div className="container mx-auto max-w-3xl">
                <h1 className="text-4xl font-bold text-center text-gray-100 mb-8">Wallet Manager</h1>
                
                <Card className="mb-6 bg-gray-100 shadow-lg">
                    <CardHeader>
                        <CardTitle className="text-2xl text-gray-800">Seed Phrase</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <Button onClick={createSeedPhrase} className="w-full bg-gray-700 hover:bg-gray-800 text-white transition-colors">
                            Create Seed Phrase and Wallet
                        </Button>
                        <div className="relative">
                            <Input value={mnemonic} readOnly className="bg-white border-gray-300 text-gray-800 pr-10" />
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button
                                            variant="ghost"
                                            className="absolute right-0 top-0 h-full px-3 hover:bg-gray-200 transition-colors"
                                            onClick={() => copyToClipboard(mnemonic, "Seed phrase copied to clipboard")}
                                        >
                                            <CopyIcon className="h-4 w-4 text-gray-600" />
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Copy seed phrase</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                    </CardContent>
                </Card>

                <Card className="mb-6 bg-gray-100 shadow-lg">
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle className="text-2xl text-gray-800">Wallets</CardTitle>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button
                                        onClick={() => addWallet()}
                                        className="hover:bg-gray-200 transition-colors"
                                    >
                                        <PlusIcon className="h-4 w-4 text-gray-600" />
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Add new wallet</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {wallets.map((wallet, index) => (
                            <div key={index} className="p-4 bg-gray-200 rounded-lg space-y-2 relative">
                                <div className="flex justify-between items-center">
                                    <p className="text-sm text-gray-600">Public Key:</p>
                                    <div className="flex space-x-2">
                                        <TooltipProvider>
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                    <Button
                                                        variant="ghost"
                                                        onClick={() => copyToClipboard(wallet.publicKey, "Public key copied to clipboard")}
                                                        className="hover:bg-gray-300 transition-colors"
                                                    >
                                                        <CopyIcon className="h-4 w-4 text-gray-600" />
                                                    </Button>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>Copy public key</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                        <TooltipProvider>
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                    <Button
                                                        variant="ghost"
                                                        onClick={() => deleteWallet(index)}
                                                        className="hover:bg-gray-300 transition-colors"
                                                    >
                                                        <TrashIcon className="h-4 w-4 text-red-500" />
                                                    </Button>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>Delete wallet</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </div>
                                </div>
                                <p className="font-mono text-gray-800 break-all">{wallet.publicKey}</p>
                                <div className="flex justify-between items-center">
                                    <p className="text-sm text-gray-600">Private Key:</p>
                                    <div className="flex space-x-2">
                                        <TooltipProvider>
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                    <Button
                                                        variant="ghost"
                                                        onClick={() => togglePrivateKeyVisibility(index)}
                                                        className="hover:bg-gray-300 transition-colors"
                                                    >
                                                        {showPrivateKey[index] ? <EyeOffIcon className="h-4 w-4 text-gray-600" /> : <EyeIcon className="h-4 w-4 text-gray-600" />}
                                                    </Button>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>{showPrivateKey[index] ? "Hide" : "Show"} private key</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                        <TooltipProvider>
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                    <Button
                                                        variant="ghost"
                                                        onClick={() => copyToClipboard(wallet.privateKey, "Private key copied to clipboard")}
                                                        className="hover:bg-gray-300 transition-colors"
                                                    >
                                                        <CopyIcon className="h-4 w-4 text-gray-600" />
                                                    </Button>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>Copy private key</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </div>
                                </div>
                                <p className="font-mono text-gray-800 break-all">
                                    {showPrivateKey[index] ? wallet.privateKey : '•'.repeat(64)}
                                </p>
                            </div>
                        ))}
                    </CardContent>
                </Card>

                {(mnemonic || wallets.length > 0) && (
                    <Button variant="destructive" onClick={deleteAll} className="w-full bg-red-600 hover:bg-red-700 transition-colors">
                        Delete All Data
                    </Button>
                )}
            </div>
        </div>
    );
}