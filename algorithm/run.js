
const { computeMiniMax } = require('./miniMaxLogic');

const args = process.argv.slice(2);
if (args.length !== 5) {
  console.error("Usage: node run.js n1 n2 n3 n4 n5");
  process.exit(1);
}

try {
  const nums = args.map(Number);
  const res = computeMiniMax(nums);
  console.log(`${res.minSum} ${res.maxSum}`);
  console.log("Bonus:", `total=${res.total}`, `min=${res.min}`, `max=${res.max}`, `evens=[${res.evens}]`, `odds=[${res.odds}]`);
} catch (err) {
  console.error("Error:", err.message);
  process.exit(1);
}
