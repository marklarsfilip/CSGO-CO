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
      return 'Gray';
    case hash >= probabilities.White:
      return 'White';
    case hash >= probabilities.Green:
      return 'Green';
    case hash >= probabilities.Blue:
      return 'Blue';
    case hash >= probabilities.Purple:
      return 'Purple';
    case hash >= probabilities.Pink:
      return 'Pink';
    case hash >= probabilities.Orange:
      return 'Orange';
    case hash >= probabilities.Yellow:
      return 'Yellow';
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
