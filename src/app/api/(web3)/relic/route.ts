import Web3Utils from "@/utils/web3";
import { NextRequest } from "next/server";

export async function GET(_: NextRequest) {
  const data = await Web3Utils.getInstance().getProgram().account.relic.all();

  return new Response(
    JSON.stringify({
      message: "Relics fetched successfully!",
      data: data.map((item) => {
        return {
          name: item.account.name,
          description: item.account.description,
          owner: item.account.owner,
          pubkey: item.publicKey,
        };
      }),
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
