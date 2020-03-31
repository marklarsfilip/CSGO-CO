// import itemTypes from '../../lib/items.json
// Hämtas från extern plats egentligen
const possibleDesignPatterns = [
  {
    clothingBrands: [
      {
        pattern: 'Gucci',
        score: 80,
      },
      {
        pattern: 'Louis Vuitton',
        score: 70,
      },
      {
        pattern: 'Supreme',
        score: 60,
      },
    ],
  },
  {
    colors: [
      {
        pattern: 'Green',
        score: 80,
      },
      {
        pattern: 'Turqoise',
        score: 70,
      },
      {
        pattern: 'Black',
        score: 60,
      },
    ],
  },
  {
    animals: [
      {
        pattern: 'Snake skin',
        score: 80,
      },
      {
        pattern: 'Tiger striped',
        score: 70,
      },
      {
        pattern: 'Snail slime',
        score: 60,
      },
    ],
  },
];

function getdesignPattern(casePatterns) {
  const randomizedIndex =
    Math.floor(Math.random() * Object.keys(casePatterns).length) + 1;
  let randomizedPattern;
  casePatterns.forEach((pattern, index) => {
    if (index + 1 == randomizedIndex) {
      randomizedPattern = pattern;
    }
  });
  return randomizedPattern;
}

function getPattern(designPattern) {
  let possiblePatterns;
  let randomizedIndex;
  possibleDesignPatterns.forEach(possiblePatternGroup => {
    const patternObj = Object.keys(possiblePatternGroup)[0];
    if (patternObj === designPattern) {
      possiblePatterns = Object.values(possiblePatternGroup)[0];
      randomizedIndex = Math.floor(Math.random() * possiblePatterns.length);
    }
  });
  return possiblePatterns[randomizedIndex];
}

export default function generatePattern(casePatterns) {
  const designPattern = getdesignPattern(casePatterns);
  const pattern = getPattern(designPattern);

  return pattern;
}
