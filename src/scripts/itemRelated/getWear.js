import defaultWears from '../../data/exports/wears';

function updateWears(caseWears) {
  let wears = {};
  caseWears.forEach((wear) => {
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
