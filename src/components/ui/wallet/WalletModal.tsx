"use client";

import {
  WalletModalProvider,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import React from "react";
import "@solana/wallet-adapter-react-ui/styles.css";
import useWeb3 from "@/hooks/useWeb3";
// import { Transaction } from "@solana/web3.js";

export default function WalletModal() {
  const web3 = useWeb3();

  return (
    <WalletModalProvider>
      {/* <button
        onClick={() => {
          fetch(
            "http://localhost:3000/api/personality/" + web3.wallet.publicKey,
            {
              method: "POST",
              body: JSON.stringify({
                name: "John Doe",
                age: 30,
                hobbies: ["reading", "gaming"],
                message: "Hello, world!",
              }),
            }
          ).then(async (res) => {
            const data = await res.json();
            await web3.wallet.sendTransaction(
              Transaction.from(Buffer.from(data.data, "base64")),
              web3.connection.connection
            );
          });
        }}
        className="bg-red-500 h-3"
      >
        ClickMe
      </button> */}
      <WalletMultiButton />
    </WalletModalProvider>
  );
}
