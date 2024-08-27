'use client';

import { useState } from 'react';

export default function NFTMinter() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [mintAddress, setMintAddress] = useState('');

  const handleMint = async () => {
    try {
      const response = await fetch('/api/mint-nft', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, description, image }),
      });

      const data = await response.json();
      if (data.success) {
        setMintAddress(data.mint);
      } else {
        console.error('Failed to mint NFT:', data.error);
      }
    } catch (error) {
      console.error('Error minting NFT:', error);
    }
  };

  return (
    <div>
      <h1>Solana NFT Minter</h1>
      <input
        type="text"
        placeholder="NFT Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="NFT Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <button onClick={handleMint}>Mint NFT</button>
      {mintAddress && <p>Minted NFT address: {mintAddress}</p>}
    </div>
  );
}