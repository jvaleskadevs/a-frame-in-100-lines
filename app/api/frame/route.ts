import { NextRequest, NextResponse } from 'next/server';
import { getRandomImage } from '../../utils';
/*
import {kv} from "@vercel/kv";
import { getSSLHubRpcClient, Message } from "@farcaster/hub-nodejs";


const HUB_URL = process.env['HUB_URL'] || "nemes.farcaster.xyz:2283"
const client = getSSLHubRpcClient(HUB_URL);
*/

async function getResponse(req: NextRequest): Promise<NextResponse> {  
/*
  let validatedMessage : Message | undefined = undefined;
  const body: { trustedData?: { messageBytes?: string } } = await req.json();
  try {
      const frameMessage = Message.decode(Buffer.from(body?.trustedData?.messageBytes || '', 'hex'));
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
  
  const imageId = url.searchParams.get("imageId") || '';
  
  buttonId = buttonId != 0 ? buttonId : ((req as any)?.body?.untrustedData?.buttonIndex || 0);

  try {
    if (buttonId > 0 && buttonId < 3) {
      let multi = kv.multi();
      multi.hincrby(`dfbc:${imageId}`, buttonId == 1 ? "wowow" : "meh", 1);
      //multi.hset(`dfbc:${imageId}`, {[fid]: buttonId});
      multi.hset("dfbc:allowlist", {[fid]: true});
      await multi.exec();
    } 
  } catch (e) {
    console.error(e);
  }
*/
  const wowowButtonText = 'wowow';
  const mehButtonText = 'meh';
  
  const { randomImage, randomIndex } = getRandomImage();
  
  const postUrl = `https://wowow-or-meh.vercel.app/api/frame?imageId=${randomIndex}`;

  return new NextResponse(`<!DOCTYPE html><html><head>
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content=${randomImage} />
    <meta property="fc:frame:image:aspect_ratio" content="1:1" />
    <meta property="fc:frame:button:1" content=${wowowButtonText} />
    <meta property="fc:frame:button:2" content=${mehButtonText} />
    <meta property="fc:frame:post_url" content=${postUrl} />
  </head></html>`);
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';
