import { getFrameAccountAddress } from '@coinbase/onchainkit';
import { NextRequest, NextResponse } from 'next/server';

async function getResponse(req: NextRequest): Promise<NextResponse> {
  const imagesFolderLength = 2;
  const randomImage = `https://a-frame-in-100-lines-five.vercel.app/park-${Math.floor(Math.random() * imagesFolderLength) + 1}.png`;

  /*
  let accountAddress = 'X';
  try {
    const body: { trustedData?: { messageBytes?: string } } = await req.json();
    accountAddress = await getFrameAccountAddress(body, { NEYNAR_API_KEY: 'NEYNAR_API_DOCS' });
  } catch (err) {
    console.error(err);
  }
  */

  return new NextResponse(`<!DOCTYPE html><html><head>
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content=${randomImage} />
    <meta property="fc:frame:button:1" content="wowow" />
    <meta property="fc:frame:button:2" content="meh" />
    <meta property="fc:frame:post_url" content="https://a-frame-in-100-lines-five.vercel.app/api/frame" />
  </head></html>`);
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';
