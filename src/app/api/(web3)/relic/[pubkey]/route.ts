import Web3Utils from "@/utils/web3";
import { translateAddress } from "@coral-xyz/anchor";
import { bs58 } from "@coral-xyz/anchor/dist/cjs/utils/bytes";
import { Keypair, Transaction } from "@solana/web3.js";
import { NextRequest } from "next/server";

type RelicReq = {
  relicId: number;
  name: string;
  description: string;
  visibility: boolean;
  fragments: string[];
};

export async function GET(_: NextRequest, context: any) {
  const pubkey = (await context.params).pubkey;

  const data = await Web3Utils.getInstance()
    .getProgram()
    .account.relic.all([
      {
        memcmp: {
          offset: 8,
          bytes: pubkey,
        },
      },
    ]);

  if (!data || data.length === 0) {
    return new Response(
      JSON.stringify({
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

  return new Response(
    JSON.stringify({
      message: "Relic fetched successfully!",
      data: {
        name: data[0].account.name,
        description: data[0].account.description,
        owner: data[0].account.owner,
        pubkey: data[0].publicKey,
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

export async function PUT(req: NextRequest, context: any) {
  const body: Omit<RelicReq, "fragments"> = await req.json();
  const pubkey = (await context.params).pubkey;

  const tx = await Web3Utils.getInstance()
    .getProgram()
    .methods.updateRelic(
      body.relicId,
      body.name,
      body.description,
      body.visibility
    )
    .accounts({
      signer: pubkey,
    })
    .transaction();

  tx.recentBlockhash = (
    await Web3Utils.getInstance().getConnection().getLatestBlockhash()
  ).blockhash;
  tx.feePayer = pubkey;

  return new Response(
    JSON.stringify({
      message: "Relic updated successfully!",
      data: tx.serialize({ requireAllSignatures: false }).toString("base64"),
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}

export async function POST(req: NextRequest, context: any) {
  const body: Omit<Omit<RelicReq, "relicId">, "visibility"> = await req.json();
  const pubkey = (await context.params).pubkey;

  const relics = await Web3Utils.getInstance()
    .getProgram()
    .account.relic.all([
      {
        memcmp: {
          offset: 8, // owner
          bytes: pubkey,
        },
      },
    ]);

  const fragments = await Web3Utils.getInstance()
    .getProgram()
    .account.fragments.all([
      {
        memcmp: {
          offset: 8, // owner
          bytes: pubkey,
        },
      },
      {
        memcmp: {
          offset: 40, // owner
          bytes: bs58.encode(Buffer.from(Uint32Array.of(relics.length).buffer)),
        },
      },
    ]);

  const tx = new Transaction();

  const randomWallet = await Keypair.generate();

  const tx1 = await Web3Utils.getInstance()
    .getProgram()
    .methods.createRelic(relics.length, body.name, body.description)
    .accounts({
      signer: pubkey,
      authority: randomWallet.publicKey.toBase58(),
    })
    .instruction();

  const tx2 = await Web3Utils.getInstance()
    .getProgram()
    .methods.createFragments(relics.length, fragments.length)
    .accounts({
      signer: pubkey,
      oldFragments: fragments[0]?.publicKey ?? pubkey,
    })
    .instruction();

  tx.add(tx1, tx2);

  body.fragments.map(async (fragment) => {
    const tx3 = await Web3Utils.getInstance()
      .getProgram()
      .methods.mAddFragment(
        relics.length,
        fragments.length,
        Array.from(Buffer.from(fragment.slice(0, 32).padEnd(32), "utf-8"))
      )
      .accounts({
        signer: pubkey,
      })
      .instruction();

    tx.add(tx3);
  });

  tx.feePayer = translateAddress(pubkey);
  tx.recentBlockhash = (
    await Web3Utils.getInstance().getConnection().getLatestBlockhash()
  ).blockhash;

  tx.partialSign(randomWallet);

  return new Response(
    JSON.stringify({
      message: "Relic created successfully!",
      data: tx.serialize({ requireAllSignatures: false }).toString("base64"),
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
