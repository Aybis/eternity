import Web3Utils from '@/utils/web3';
import { translateAddress } from '@coral-xyz/anchor';
import { NextRequest } from 'next/server';

type ProfileReq = {
  name: string;
  age: number;
  hobbies: string[];
  message: string;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function GET(_: NextRequest, context: any) {
  const pubkey = (await context.params).pubkey;

  const data = await Web3Utils.getInstance()
    .getProgram()
    .account.personality.all([
      {
        memcmp: {
          offset: 8,
          bytes: pubkey!,
        },
      },
    ]);

  if (!data || data.length === 0) {
    return new Response(
      JSON.stringify({
        message: 'Profile not found!',
        data: null,
      }),
      {
        status: 404,
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
  }

  return new Response(
    JSON.stringify({
      message: 'Profile fetched successfully!',
      data: {
        name: data[0].account.name,
        age: data[0].account.age,
        hobbies: data[0].account.hobbie,
        message: data[0].account.message,
        owner: data[0].account.owner,
        pubkey: data[0].publicKey,
      },
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function PUT(req: NextRequest, context: any) {
  const body: ProfileReq = await req.json();
  const pubkey = (await context.params).pubkey;

  const tx = await Web3Utils.getInstance()
    .getProgram()
    .methods.updatePersonality(body.name, body.age, body.hobbies, body.message)
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
      message: 'Profile updated successfully!',
      data: tx.serialize({ requireAllSignatures: false }).toString('base64'),
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function POST(req: NextRequest, context: any) {
  const body: ProfileReq = await req.json();
  const pubkey = (await context.params).pubkey;

  const tx = await Web3Utils.getInstance()
    .getProgram()
    .methods.createPersonality(body.name, body.age, body.hobbies, body.message)
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
      message: 'Profile created successfully!',
      data: tx.serialize({ requireAllSignatures: false }).toString('base64'),
    }),
    {
      status: 201,
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
}
