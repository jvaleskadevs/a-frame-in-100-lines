import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';
import { getRandomImage } from './utils';


const { randomImage, randomIndex } = getRandomImage();
const postUrl = `https://wowow-or-meh.vercel.app/api/frame?imageId=${randomIndex}`;

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
