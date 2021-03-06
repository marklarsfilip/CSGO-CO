import generateRarity from './itemRelated/getRarity';
import generateType from './itemRelated/getType';
import generateWear from './itemRelated/getWear';
import generatePattern from './itemRelated/getPattern';
import generateId from './itemRelated/getId';
import calculateScore from './itemRelated/calculateScore';

import testCase from '../data/exports/cases';

export default function generateItem() {
  const rarity = generateRarity(testCase.rarityLevel);
  const type = generateType(testCase.types);
  const pattern = generatePattern(testCase.patterns);
  const wear = generateWear(testCase.wear);
  const id = generateId('item');
  const itemScore = calculateScore(rarity, type, pattern, wear);

  const item = {
    name: `${wear.wear} ${pattern.pattern} ${type.type}`,
    id,
    case: testCase.name,
    rarity: rarity.rarity,
    type,
    pattern,
    wear,
    score: itemScore,
    image: type.graphic,
  };

  return item;
}
