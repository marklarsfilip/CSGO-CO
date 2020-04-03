function getRandomNumber() {
  const min = 1;
  const max = 1000;
  const generatedNumber = Math.floor(Math.random() * max) + min;
  return generatedNumber;
}

function getRarity(probabilities, hash) {
  const color = '';
  switch (true) {
    case hash >= probabilities.Gray:
      return {rarity: 'Gray', score: 10};
    case hash >= probabilities.White:
      return {rarity: 'White', score: 20};
    case hash >= probabilities.Green:
      return {rarity: 'Green', score: 30};
    case hash >= probabilities.Blue:
      return {rarity: 'Blue', score: 40};
    case hash >= probabilities.Purple:
      return {rarity: 'Purple', score: 50};
    case hash >= probabilities.Pink:
      return {rarity: 'Pink', score: 60};
    case hash >= probabilities.Orange:
      return {rarity: 'Orange', score: 70};
    case hash >= probabilities.Yellow:
      return {rarity: 'Yellow', score: 80};
    default:
    // code block
  }
  return color;
}

function updateProbabilities(probabilities, rarityBoost) {
  for (let key in rarityBoost) {
    probabilities[key] = rarityBoost[key];
  }
  return probabilities;
}

export default function generateRarity(rarityBoost) {
  let probabilities;
  let color;
  const hash = getRandomNumber();
  let defaultProbabilities = {
    Yellow: 1,
    Orange: 5,
    Pink: 10,
    Purple: 25,
    Blue: 75,
    Green: 150,
    White: 500,
    Gray: 750,
  };

  if (rarityBoost) {
    probabilities = updateProbabilities(defaultProbabilities, rarityBoost);
    color = getRarity(probabilities, hash);
  } else {
    color = getRarity(defaultProbabilities, hash);
  }

  return color;
}
