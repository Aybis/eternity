import { Web3Context } from '@/components/web3-provider';
import { useContext } from 'react';
import type { Connection } from '@solana/web3.js';
import type { WalletContextState } from '@solana/wallet-adapter-react';

export default function useWeb3(): {
  connection: Connection;
  wallet: WalletContextState;
} {
  const { connection, wallet } = useContext(Web3Context);

  if (process.env.NODE_ENV === 'development') {
    console.log('useWeb3', connection, wallet);
  }

  if (!connection || !wallet) {
    throw new Error(
      '[useWeb3] Web3Provider context not found. Ensure your component is wrapped with <Web3Provider>.',
    );
  }

  return { connection, wallet };
}
