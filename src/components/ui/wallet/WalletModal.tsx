'use client';

import useWeb3 from '@/hooks/useWeb3';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css';
import { Transaction } from '@solana/web3.js';
import WalletMultiButtonClient from './WalletMultiButtonClient';

export default function WalletModal() {
  const web3 = useWeb3();

  console.log('WalletModal', web3);

  return (
    <WalletModalProvider>
      <button
        onClick={() => {
          fetch(`/api/personality/${web3.wallet.publicKey}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: 'John Doe',
              age: 30,
              hobbies: ['reading', 'gaming'],
              message: 'Hello, world!',
            }),
          })
            .then(async (res) => {
              if (!res.ok) {
                const errText = await res.text();
                throw new Error(`Failed with status ${res.status}: ${errText}`);
              }

              const data = await res.json();
              console.log('data', data);

              await web3.wallet.sendTransaction(
                Transaction.from(Buffer.from(data.data, 'base64')),
                web3.connection,
              );
            })
            .catch((err) => {
              console.error('❌ Error sending transaction:', err.message);
            });
        }}
        className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded mb-4"
      >
        ClickMe
      </button>
      <WalletMultiButtonClient />
    </WalletModalProvider>
  );
}
