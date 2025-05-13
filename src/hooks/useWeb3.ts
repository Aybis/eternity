import { Web3Context } from '@/components/web3-provider';
import { useContext } from 'react';
import type { Connection } from '@solana/web3.js';
import type { WalletContextState } from '@solana/wallet-adapter-react';

export default function useWeb3(): {
  connection: Connection;
  wallet: WalletContextState;
} {
  const context = useContext(Web3Context);

  if (!context || !context.connection || !context.wallet) {
    throw new Error(
      '[useWeb3] Web3Provider context not found or incomplete. Ensure your component is wrapped with <Web3Provider>.',
    );
  }

  const { connection: rawConnection, wallet } = context;
  const connection = rawConnection as unknown as Connection;

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
