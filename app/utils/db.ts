import * as fs from 'fs';

export const resultsDB = {
  getAll: () => readData(),
  getByImageId,
  increment,
  setValue,
  deleteAll
};

type Result = {
  imageId: string | number;
}

function getByImageId(imageId: string | number) {
  const results = readData();
  return results.find((res: Result) => res.imageId.toString() === imageId.toString());
}

function increment(imageId: string | number, tag: string, amount: number) {
  const results = readData();
  const result = { imageId, [tag]: amount };
  
  results.push(result);
  writeData(results);
}

function setValue(imageId: string | number, tag: string, value: number) {
  const results = readData();
  const result = { [tag]: value };
  
  results.push(result);
  writeData(results);
}


function deleteAll() {  
  writeData({});
}


function readData() {
  return JSON.parse(fs.readFileSync('../../data/results.json', 'utf8'));
}

function writeData(data: any) {
  fs.writeFileSync('../../data/results.json', JSON.stringify(data, null, 4));
}
