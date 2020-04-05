export default function calculateScore(rarity, type, pattern, wear) {
  let score = 0;
  score = score + rarity.score;
  score = score + type.score;
  score = score + pattern.score;
  score = score + wear.score;
  return score;
}
