const l1 = [1, 2, 3, 9];
const l2 = [1, 2, 4, 4];
const l3 = [1, 2, 15, 3, 9, 4, 5, 6, 7, 8, 9];

// O(n) time
// O(n) space

function sumPairs(l, s) {
  const seen = new Set();
  for (let i = 0; i < l.length; i++) {
    const diff = s - l[i];
    if (seen.has(diff)) {
      return [diff, l[i]];
    }
    seen.add(l[i]);
    console.log(seen);
  }
  return false;
}

function sumPairs2(l, s) {
  const seen = new Set();
  for (let i = 0; i < l.length; i++) {
    if (seen.has(l[i])) {
      return [l[i], s - l[i]];
    }
    seen.add(s - l[i]);
    console.log(seen);
  }
  return false;
}

console.log(sumPairs2(l1, 8));
console.log(sumPairs2(l2, 8));
console.log(sumPairs2(l3, 8));