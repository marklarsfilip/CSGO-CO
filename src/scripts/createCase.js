import generateRarity from './itemRelated/getRarity';

export default function createTestCase(
  rarityBoost,
  categories,
  designPatterns,
) {
  const rarity = generateRarity(rarityBoost);

  const newCase = {
    name: 'Corona Outbreak Case',
    id: '2.001',
    collection: 'Corona',
    rarity,
    categories,
    designPatterns,
  };

  return newCase;
}
