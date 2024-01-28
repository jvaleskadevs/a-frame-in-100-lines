import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const imagesFolderLength = 20;
const randomImage = `https://a-frame-in-100-lines-five.vercel.app/wowowcow-${Math.floor(Math.random() * imagesFolderLength) + 1}.png`;

const frameMetadata = getFrameMetadata({
  buttons: ['wowow', 'meh'],
  image: randomImage,
  post_url: 'https://a-frame-in-100-lines-five.vercel.app/api/frame',
});

export const metadata: Metadata = {
  title: 'jvaleska frame',
  description: 'LFG!',
  openGraph: {
    title: 'jvaleska frame',
    description: 'LFG!',
    images: [randomImage],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>jvaleska.frame</h1>
    </>
  );
}
