"use client";

import Web3Utils from "@/utils/web3";
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
import { createContext, useMemo } from "react";

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
  const network = Web3Utils.getInstance().getConnection().rpcEndpoint;

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
