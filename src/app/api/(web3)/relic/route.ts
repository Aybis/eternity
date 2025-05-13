import Web3Utils from '@/utils/web3';

export async function GET() {
  const data = await Web3Utils.getInstance().getProgram().account.relic.all();

  if (!data || data.length === 0) {
    return new Response(
      JSON.stringify({
        error: true,
        message: 'No relics found!',
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
      error: false,
      message: 'Relics fetched successfully!',
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
        'Content-Type': 'application/json',
      },
    },
  );
}
