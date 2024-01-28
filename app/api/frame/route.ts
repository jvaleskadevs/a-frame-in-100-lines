import { getFrameAccountAddress } from '@coinbase/onchainkit';
import { NextRequest, NextResponse } from 'next/server';
//import {kv} from "@vercel/kv";
import {getSSLHubRpcClient, Message} from "@farcaster/hub-nodejs";


const HUB_URL = process.env['HUB_URL'] || "nemes.farcaster.xyz:2283"
const client = getSSLHubRpcClient(HUB_URL);


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
  let validatedMessage : Message | undefined = undefined;
  try {
      const frameMessage = Message.decode(Buffer.from((req as any)?.body?.trustedData?.messageBytes || '', 'hex'));
      const result = await client.validateMessage(frameMessage);
      if (result.isOk() && result.value.valid) {
          validatedMessage = result.value.message;
      }
  } catch (e)  {
      return NextResponse.json({ message: `Failed to validate message: ${e}`}, { status: 400 });
  }

  let buttonId = validatedMessage?.data?.frameActionBody?.buttonIndex || 0;
  const fid = validatedMessage?.data?.fid || 0;
  
  const url = new URL(req.url);
  
  const imageId = url.searchParams.get("id") || '';
  
  buttonId = buttonId != 0 ? buttonId : ((req as any)?.body?.untrustedData?.buttonIndex || 0);
  let wowowButtonText;
  let mehButtonText;
  if (buttonId > 0 && buttonId < 3) {
      if (buttonId === 1) {
        wowowButtonText = 'wowow1';
        mehButtonText = 'meh';        
      } else {
        wowowButtonText = 'wowow';
        mehButtonText = 'meh1';      
      }
  }
  

  return new NextResponse(`<!DOCTYPE html><html><head>
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content=${randomImage} />
    <meta property="fc:frame:button:1" content=${buttonId} />
    <meta property="fc:frame:button:2" content=${mehButtonText} />
    <meta property="fc:frame:button:3" content=${imageId} />
    <meta property="fc:frame:post_url" content="https://a-frame-in-100-lines-five.vercel.app/api/frame" />
  </head></html>`);
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';
