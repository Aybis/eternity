import Web3Utils from "@/utils/web3";
import { NextRequest } from "next/server";

async function getFragments(pubkey: string) {
  const fragments = await Web3Utils.getInstance()
    .getProgram()
    .account.fragments.fetch(pubkey);

  return fragments.fragment.map((fragment: number[]) =>
    Buffer.from(fragment).toString("utf-8").replace(/\0/g, "")
  );
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const pubkey = body.pubkey;
  const relicPubkey = body.relicPubkey;

  if (!pubkey || !relicPubkey)
    return new Response(
      JSON.stringify({
        error: true,
        message: "Pubkey and relicPubkey are required!",
        data: null,
      }),
      {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

  const relicData = await Web3Utils.getInstance()
    .getProgram()
    .account.relic.fetch(relicPubkey);

  if (!relicData)
    return new Response(
      JSON.stringify({
        error: true,
        message: "Relic not found!",
        data: null,
      }),
      {
        status: 404,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

  const personalityData = await Web3Utils.getInstance()
    .getProgram()
    .account.personality.all([
      {
        memcmp: {
          offset: 8,
          bytes: pubkey,
        },
      },
    ]);

  if (personalityData.length == 0)
    return new Response(
      JSON.stringify({
        error: true,
        message: "You don't have a personality!",
        data: null,
      }),
      {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

  //   if (relicData.owner.toBase58() !== pubkey)
  //     return new Response(
  //       JSON.stringify({
  //         error: true,
  //         message: "You are not the owner of this relic!",
  //         data: null,
  //       }),
  //       {
  //         status: 400,
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );

  console.log("personalityData", personalityData);

  return new Response(
    JSON.stringify({
      error: false,
      message: "Relic published successfully!",
      data: {
        relicData: {
          ...relicData,
          fragments: await getFragments(relicData.fragments!.toBase58()),
        },
        personalityData: personalityData[0]?.account,
        pubkey: pubkey,
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
