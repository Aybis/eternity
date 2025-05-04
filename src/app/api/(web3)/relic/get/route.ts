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

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const pubkey = searchParams.get("pubkey")!;

  const relicData = await Web3Utils.getInstance()
    .getProgram()
    .account.relic.all([
      {
        memcmp: {
          offset: 12,
          bytes: pubkey,
        },
      },
    ]);

  if (!relicData || relicData.length === 0) {
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
  }

  const resolvedData = await Promise.all(
    relicData.map(async (item) => {
      return {
        id: item.account.relicId,
        name: item.account.name,
        description: item.account.description,
        owner: item.account.owner,
        fragments: await getFragments(item.account.fragments!.toBase58()),
        pubkey: item.publicKey,
        visibility: item.account.visibility,
      };
    })
  );

  return new Response(
    JSON.stringify({
      error: false,
      message: "Relic fetched successfully!",
      data: resolvedData,
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
