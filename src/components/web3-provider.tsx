"use client";

import {
  ConnectionContextState,
  ConnectionProvider,
  useConnection,
  useWallet,
  WalletContextState,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import {
  PhantomWalletAdapter,
  UnsafeBurnerWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { createContext, useEffect, useMemo } from "react";

type Web3ContextType = {
  connection: ConnectionContextState | null;
  wallet: WalletContextState | null;
};

export const Web3Context = createContext<Web3ContextType>({
  connection: null,
  wallet: null,
});

const Web3ProviderContext = ({ children }: { children: React.ReactNode }) => {
  const connection = useConnection();
  const wallet = useWallet();

  return (
    <Web3Context.Provider
      value={{
        connection: connection,
        wallet: wallet,
      }}
    >
      {children}
    </Web3Context.Provider>
  );
};

export const Web3Provider = ({ children }: { children: React.ReactNode }) => {
  const network = "http://localhost:8899";

  const wallets = useMemo(
    () => [new UnsafeBurnerWalletAdapter(), new PhantomWalletAdapter()],
    [network]
  );

  return (
    <ConnectionProvider endpoint={network}>
      <WalletProvider wallets={wallets}>
        <Web3ProviderContext>{children}</Web3ProviderContext>
      </WalletProvider>
    </ConnectionProvider>
  );
};
