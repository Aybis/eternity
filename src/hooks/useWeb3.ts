import { Web3Context } from "@/components/web3-provider";
import { useContext } from "react";

export default function useWeb3() {
  const { connection, wallet } = useContext(Web3Context);

  if (!connection || !wallet) {
    throw new Error("useWeb3 must be used within a Web3Provider");
  }

  return { connection, wallet };
}
