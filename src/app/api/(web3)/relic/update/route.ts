import Web3Utils from "@/utils/web3";
import { translateAddress } from "@coral-xyz/anchor";
import { NextRequest } from "next/server";

export async function PATCH(req: NextRequest) {
  const body = await req.json();
  const pubkey = body.pubkey;
  const relicId = body.relicId;
  const relicPubkey = body.relicPubkey;
  const { name, description } = body;

  if (!pubkey || !relicId) {
    return new Response(
      JSON.stringify({
        message: "Pubkey and relicId are required!",
        data: null,
      }),
      {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  const relicData = await Web3Utils.getInstance()
    .getProgram()
    .account.relic.fetch(relicPubkey);

  if (!relicData)
    return new Response(JSON.stringify({ message: "Relic not found!" }), {
      status: 404,
      headers: {
        "Content-Type": "application/json",
      },
    });

  const tx = await Web3Utils.getInstance()
    .getProgram()
    .methods.updateRelic(relicId, name, description, relicData.visibility)
    .accounts({
      signer: pubkey,
    })
    .transaction();

  tx.recentBlockhash = (
    await Web3Utils.getInstance().getConnection().getLatestBlockhash()
  ).blockhash;
  tx.feePayer = translateAddress(pubkey);

  return new Response(
    JSON.stringify({
      message: "Relic updated successfully!",
      data: {
        txData: tx
          .serialize({ requireAllSignatures: false })
          .toString("base64"),
      },
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
