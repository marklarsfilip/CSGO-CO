import possibleitemTypes from '../../data/exports/itemTypes';

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
  possibleitemTypes.forEach((possibleType) => {
    const typeObj = Object.keys(possibleType)[0];
    if (typeObj === itemType) {
      possibleItems = possibleType[typeObj];
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
