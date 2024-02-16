import { kv } from '@vercel/kv';
import { NextResponse } from 'next/server';
 
export async function GET() {
  const maxId = 840;
  const results = [];
  for (let i = 1; i < maxId; i++) {
    results.push(await kv.hgetall(`dfbc:imageId:${i}`));
  }
  return NextResponse.json(results);
}
