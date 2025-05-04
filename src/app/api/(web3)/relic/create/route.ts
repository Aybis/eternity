import Web3Utils from "@/utils/web3";
import { Keypair, Transaction } from "@solana/web3.js";
import { translateAddress } from "@coral-xyz/anchor";
import { NextRequest } from "next/server";

async function uploadFileWithRetry(
  file: File,
  apiKey: string,
  maxRetries = 10
): Promise<string> {
  const formData = new FormData();
  formData.append("file", file);

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const response = await fetch(
        "https://api.elwyn.ai/gateway/ai/assessment/upload-file",
        {
          method: "POST",
          headers: {
            "X-AI_TOKEN": apiKey,
            "X-REQUEST_FROM": "AI_TOKEN",
          },
          body: formData,
        }
      );

      if (!response.ok)
        throw new Error(`Upload failed (status ${response.status})`);

      const json = await response.json();
      return json.file_id;
    } catch (err) {
      console.warn(
        `Attempt ${attempt} failed for file: ${file.name}. Error:`,
        err
      );
      if (attempt === maxRetries)
        throw new Error(
          `Failed to upload ${file.name} after ${maxRetries} attempts`
        );
      await new Promise((res) => setTimeout(res, 500 * attempt));
    }
  }

  throw new Error("Unexpected error"); // fallback
}

async function uploadAllFiles(
  files: File[],
  apiKey: string
): Promise<string[]> {
  const uploadPromises = files.map((file) => uploadFileWithRetry(file, apiKey));
  return Promise.all(uploadPromises);
}

export async function POST(req: NextRequest) {
  const body = await req.formData();
  const pubkey = body.get("pubkey") as string;
  const files = body.getAll("fragments") as File[];
  const randomWallet = await Keypair.generate();
  const apiKey = process.env.ELWYN_API_KEY!;

  if (!pubkey) {
    return new Response(
      JSON.stringify({
        error: true,
        message: "Pubkey is required!",
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

  try {
    const uuids = await uploadAllFiles(files, apiKey);
    // const uuids = [
    //   "uuid1",
    //   "uuid2",
    //   "uuid3",
    //   "uuid4",
    //   "uuid5",
    //   "uuid6",
    //   "uuid7",
    //   "uuid8",
    //   "uuid9",
    //   "uuid10",
    // ];

    const relicCount = (
      await Web3Utils.getInstance()
        .getProgram()
        .account.relic.all([
          {
            memcmp: {
              offset: 12,
              bytes: pubkey,
            },
          },
        ])
    ).length;

    const tx = new Transaction();

    const ix1 = await Web3Utils.getInstance()
      .getProgram()
      .methods.createRelic(
        relicCount,
        body.get("name") as string,
        body.get("description") as string
      )
      .accounts({
        signer: pubkey,
        authority: randomWallet.publicKey.toBase58(),
      })
      .instruction();

    tx.add(ix1);

    const ix2 = await Web3Utils.getInstance()
      .getProgram()
      .methods.createFragments(relicCount, relicCount)
      .accounts({
        signer: pubkey,
        oldFragments: pubkey,
      })
      .instruction();

    tx.add(ix2);

    const fragments = Promise.all(
      uuids.map((uuid) =>
        Web3Utils.getInstance()
          .getProgram()
          .methods.mAddFragment(
            relicCount,
            relicCount,
            Array.from(Buffer.from(uuid.slice(0, 32).padEnd(32), "utf-8"))
          )
          .accounts({
            signer: pubkey,
          })
          .instruction()
      )
    );

    tx.add(...(await fragments));

    tx.feePayer = translateAddress(pubkey);
    tx.recentBlockhash = (
      await Web3Utils.getInstance().getConnection().getLatestBlockhash()
    ).blockhash;

    tx.partialSign(randomWallet);

    return new Response(
      JSON.stringify({
        error: false,
        message: "Relic created successfully!",
        data: {
          name: body.get("name"),
          description: body.get("description"),
          fragments: uuids,
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
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: true,
        message: error,
        data: null,
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
