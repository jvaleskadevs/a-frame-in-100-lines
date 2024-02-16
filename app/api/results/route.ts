import { kv } from '@vercel/kv';
import { NextResponse } from 'next/server';
 
export async function GET() {
  const maxId = 20;
  const results = [];
  for (let i = 0; i < maxId; i++) {
    results.push(await kv.hgetall(`imageId:${i}`));
  }
  return NextResponse.json(results);
}
