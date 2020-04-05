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
      return {rarity: 'gray', score: 10};
    case hash >= probabilities.White:
      return {rarity: 'white', score: 20};
    case hash >= probabilities.Green:
      return {rarity: 'green', score: 30};
    case hash >= probabilities.Blue:
      return {rarity: 'blue', score: 40};
    case hash >= probabilities.Purple:
      return {rarity: 'purple', score: 50};
    case hash >= probabilities.Pink:
      return {rarity: 'pink', score: 60};
    case hash >= probabilities.Orange:
      return {rarity: 'orange', score: 70};
    case hash >= probabilities.Yellow:
      return {rarity: 'yellow', score: 80};
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
