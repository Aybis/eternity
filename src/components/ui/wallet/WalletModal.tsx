"use client";

import {
  WalletModalProvider,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import React from "react";
import "@solana/wallet-adapter-react-ui/styles.css";
import useWeb3 from "@/hooks/useWeb3";

export default function WalletModal() {
  const _ = useWeb3();

  return (
    <WalletModalProvider>
      <WalletMultiButton />
    </WalletModalProvider>
  );
}
