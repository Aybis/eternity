import Web3Utils from "@/utils/web3";
import { NextRequest } from "next/server";

export async function GET(_: NextRequest) {
  const data = await Web3Utils.getInstance()
    .getProgram()
    .account.personality.all();

  return new Response(
    JSON.stringify({
      message: "Profiles fetched successfully!",
      data: data.map((item) => {
        return {
          name: item.account.name,
          age: item.account.age,
          hobbies: item.account.hobbie,
          message: item.account.message,
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
