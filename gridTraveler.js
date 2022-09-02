const gTBruteForce = (m, n) => {
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;
  return gTBruteForce(m - 1, n) + gTBruteForce(m, n - 1);
}

console.log('gTBruteForce =>', gTBruteForce(2, 3));