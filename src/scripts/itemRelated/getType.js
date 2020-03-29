// import itemTypes from '../../lib/items.json
// Hämtas från extern plats egentligen
const possibleitemTypes = [
  {
    bags: ['Handbag', 'Sportsbag', 'becknarväska'],
  },
  {
    clothes: ['Hat', 'Jeans', 'T-shirt'],
  },
  {
    shoes: ['Crocs', 'Sandals', 'Sneakers'],
  },
];

function getItemType(caseTypes) {
  const randomizedIndex =
    Math.floor(Math.random() * Object.keys(caseTypes).length) + 1;
  let randomizedType;
  caseTypes.forEach((type, index) => {
    if (index + 1 == randomizedIndex) {
      randomizedType = type;
    }
  });
  return randomizedType;
}

function getItem(itemType) {
  let possibleItems;
  let randomizedIndex;
  possibleitemTypes.forEach(possibleType => {
    const typeObj = Object.keys(possibleType)[0];
    if (typeObj === itemType) {
      possibleItems = Object.values(possibleType)[0];
      randomizedIndex = Math.floor(Math.random() * possibleItems.length);
    }
  });
  return possibleItems[randomizedIndex];
}

export default function generateType(caseTypes) {
  const itemType = getItemType(caseTypes);
  const item = getItem(itemType);

  return item;
}
