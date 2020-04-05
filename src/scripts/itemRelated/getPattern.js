import possibleDesignPatterns from '../../data/exports/designPatterns';

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
  possibleDesignPatterns.forEach((possiblePatternGroup) => {
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
