import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const frameMetadata = getFrameMetadata({
  buttons: ['Next image'],
  image: 'https://a-frame-in-100-lines/park-1.png',
  post_url: 'https://a-frame-in-100-lines/api/frame',
});

export const metadata: Metadata = {
  title: 'jvaleska test',
  description: 'LFG!',
  openGraph: {
    title: 'valeska test',
    description: 'LFG!',
    images: ['https://a-frame-in-100-lines/park-1.png'],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>jvaleska.test</h1>
    </>
  );
}
