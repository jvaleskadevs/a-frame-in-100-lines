import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const imagesFolderLength = 20;
const randomIndex = Math.floor(Math.random() * imagesFolderLength) + 1;
const randomImage = `https://a-frame-in-100-lines-five.vercel.app/wowowcow-${randomIndex}.png`;
const postUrl = `https://a-frame-in-100-lines-five.vercel.app/api/frame?imageId=${randomIndex}`;

const frameMetadata = getFrameMetadata({
  buttons: ['wowow', 'meh'],
  image: randomImage,
  post_url: postUrl,
});

export const metadata: Metadata = {
  title: 'wowow or meh?',
  description: 'wowow or meh? farcaster frame',
  openGraph: {
    title: 'wowow or meh?',
    description: 'wowow or meh? farcaster frame',
    images: [randomImage],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>wowow or meh?</h1>
    </>
  );
}
