import { HOST, PROJECT, MAX_IMAGES } from '../config';

export const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * MAX_IMAGES) + 1;
  return { 
    randomImage: HOST + PROJECT + randomIndex.toString() + ".png",
    randomIndex: randomIndex
  };
}
