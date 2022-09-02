let n = 0
let f = ''

process.argv.forEach(function (val) {
  if (/f/.test(val)) f = val.split('=')[1]
  if (Number(val)) n = val;
});

function factorialBruteForce(n) {
    if (n == 0) {
      return 1;
    }
    return n * factorialBruteForce(n - 1);
}

function factorialMemoization(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n == 0) return 1;
    memo[n] = n * factorialMemoization(n - 1, memo);
    return memo[n];
}

switch (f) {
  case 'bruteForce':
    console.log('brute force', factorialBruteForce(n))
    break
  case 'memoization':
    console.log('memo =>', factorialMemoization(n))
    break
  default:
    console.log('default', factorialMemoization(n))
}
      
