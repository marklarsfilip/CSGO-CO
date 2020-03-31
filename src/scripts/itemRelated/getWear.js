// Hämtas från extern plats egentligen
const defaultWears = {
  Pristine: {wear: 'Pristine', score: 80},
  Shiny: {wear: 'Shiny', score: 70},
  Untouched: {wear: 'Untouched', score: 60},
  Ordinary: {wear: 'Ordinary', score: 50},
  Scratched: {wear: 'Scratched', score: 40},
  Damaged: {wear: 'Damaged', score: 30},
  Broken: {wear: 'Broken', score: 20},
  Worthless: {wear: 'Worthless', score: 10},
};

function updateWears(caseWears) {
  let wears = {};
  caseWears.forEach(wear => {
    wears[wear] = defaultWears[wear];
  });
  return wears;
}

function getWear(availableWears) {
  const randomizedIndex =
    Math.floor(Math.random() * Object.keys(availableWears).length) + 0;
  const key = Object.keys(availableWears)[randomizedIndex];
  const value = availableWears[key];
  return value;
}

export default function generateWear(caseWears) {
  let availableWears;
  if (caseWears.length) {
    availableWears = updateWears(caseWears);
  } else {
    availableWears = defaultWears;
  }
  const generatedWear = getWear(availableWears);
  return generatedWear;
}
