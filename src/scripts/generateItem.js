import generateRarity from './itemRelated/getRarity';
import generateType from './itemRelated/getType';
import generateWear from './itemRelated/getWear';
import generatePattern from './itemRelated/getPattern';

export default function generateItem() {
  const testCase = {
    name: 'testCase 2020',
    id: '2.001',
    rarityLevel: {
      Yellow: 2,
      Orange: 10,
      Pink: 25,
    },
    types: ['bags', 'clothes', 'shoes'],
    collection: 'test',
    patterns: ['Gucci', 'Louis Vuitton'],
    wear: 'all',
  };

  const rarity = generateRarity(testCase.rarityLevel);
  const type = generateType(testCase.types);
  const pattern = generatePattern(testCase.patterns);
  const wear = generateWear(testCase.wear);

  const item = {
    name: 'Automatiskt',
    id: '1.001',
    case: testCase.name,
    rarity,
    type,
    pattern,
    wear,
  };

  return item;
}
