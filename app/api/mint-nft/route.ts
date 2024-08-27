import {
    Connection,
    Keypair,
    PublicKey,
    Transaction,
    sendAndConfirmTransaction,
} from '@solana/web3.js';
import {
    createMetadataAccountV3,
    CreateMetadataAccountV3InstructionAccounts,
    CreateMetadataAccountV3InstructionArgs,
    DataV2,
} from '@metaplex-foundation/mpl-token-metadata';
import {
    createMint,
    getOrCreateAssociatedTokenAccount,
    mintTo,
    Account as TokenAccount,
    Mint as TokenMint
} from '@solana/spl-token';
import { NextResponse } from 'next/server';

// Constants for Solana Mainnet and Metaplex Program ID
const SOLANA_RPC_URL = 'https://api.mainnet-beta.solana.com'; // Change to mainnet
const METADATA_PROGRAM_ID = new PublicKey('metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s');

// Interface for the request body
interface MintRequestBody {
    name: string;
    symbol: string;
    description: string;
    image: string;
}

// TypeScript Function
export async function POST(request: Request): Promise<NextResponse> {
    try {
        const { name, symbol, description, image }: MintRequestBody = await request.json();

        // Connect to Solana mainnet
        const connection = new Connection(SOLANA_RPC_URL, 'confirmed');

        // Generate a new keypair for the mint (should be replaced with secure key management)
        const mintKeypair = Keypair.generate();

        // Replace with actual payer keypair (load securely from environment or wallet)
        const payerKeypair = Keypair.generate(); // Replace with a secure method

        // Create the mint
        const mint: PublicKey = await createMint(
            connection,
            payerKeypair,
            payerKeypair.publicKey,
            null, // Freeze authority (set to null for NFTs)
            0 // 0 decimals for NFT
        );

        // Get or create the associated token account for the payer
        const tokenAccount: TokenAccount = await getOrCreateAssociatedTokenAccount(
            connection,
            payerKeypair,
            mint,
            payerKeypair.publicKey
        );

        // Mint 1 token to the payer's token account
        await mintTo(
            connection,
            payerKeypair,
            mint,
            tokenAccount.address,
            payerKeypair,
            1 // Amount to mint
        );

        // Find the PDA for the metadata account
        const [metadataPDA] = PublicKey.findProgramAddressSync(
            [
                Buffer.from('metadata'),
                METADATA_PROGRAM_ID.toBuffer(),
                mint.toBuffer(),
            ],
            METADATA_PROGRAM_ID
        );

        // Prepare the metadata
        const metadataAccounts: CreateMetadataAccountV3InstructionAccounts = {
            metadata: metadataPDA,
            mint: mint,
            mintAuthority: payerKeypair,
            payer: payerKeypair,
            updateAuthority: payerKeypair,
        };

        const metadataArgs: CreateMetadataAccountV3InstructionArgs = {
            data: {
                name: name,
                symbol: symbol,
                uri: image,
                sellerFeeBasisPoints: 0,
                creators: null,
                collection: null,
                uses: null,
            },
            isMutable: true,
            collectionDetails: null,
        };

        // Create metadata account instruction
        const createMetadataInstruction = createMetadataAccountV3({
            metadata: metadataAccounts.metadata,
            mint: metadataAccounts.mint,
            mintAuthority: metadataAccounts.mintAuthority,
            payer: metadataAccounts.payer,
            updateAuthority: metadataAccounts.updateAuthority,
        }, metadataArgs);

        // Construct and send the transaction
        const transaction = new Transaction().add(createMetadataInstruction);
        const signature = await sendAndConfirmTransaction(connection, transaction, [payerKeypair]);

        return NextResponse.json({
            success: true,
            mint: mint.toString(),
            tokenAccount: tokenAccount.address.toString(),
            signature: signature,
        });
    } catch (error) {
        console.error('Error minting NFT:', error);
        return NextResponse.json({ error: 'Failed to mint NFT' }, { status: 500 });
    }
}
