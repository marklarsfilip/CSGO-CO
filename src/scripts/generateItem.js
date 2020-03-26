export default function generateTestItem(selectedCase) {
  const rarity = generateRarity(selectedCase);
  const type = generateType(selectedCase);
  const pattern = generatePattern(selectedCase);
  const wear = generateWear(type);

  const item = {
    name: 'test',
    id: '1.001',
    case: selectedCase.name,
    rarity,
    type,
    pattern,
    wear,
  };

  return item;
}

function generateRarity(selectedCase) {
  const rarity = '';
  return rarity;
}

function generateType(selectedCase) {
  const type = '';
  return type;
}

function generatePattern(selectedCase) {
  const pattern = '';
  return pattern;
}

function generateWear(type) {
  const wear = '';
  return wear;
}
