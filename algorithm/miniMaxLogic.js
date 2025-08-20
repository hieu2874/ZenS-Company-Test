
function computeMiniMax(arr) {
  if (!Array.isArray(arr)) throw new TypeError("arr must be array");
  if (arr.length !== 5) throw new Error("arr length must be 5");
  const nums = arr.map(x => {
    const n = typeof x === 'number' ? x : Number(x);
    if (!Number.isFinite(n)) throw new Error("all elements must be finite numbers");
    return n;
  });

  const total = nums.reduce((a, b) => a + b, 0);
  const minVal = Math.min(...nums);
  const maxVal = Math.max(...nums);

  const minSum = total - maxVal; 
  const maxSum = total - minVal; 

  const evens = nums.filter(n => n % 2 === 0);
  const odds  = nums.filter(n => n % 2 !== 0);

  return {
    minSum,
    maxSum,
    total,
    min: minVal,
    max: maxVal,
    evens,
    odds
  };
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { computeMiniMax };
}
if (typeof window !== 'undefined') {
  window.computeMiniMax = computeMiniMax;
}
