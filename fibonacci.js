const fibBruteForce = (n) => {
  if (n <= 2) return 1;
  return fibBruteForce(n - 1) + fibBruteForce(n - 2);
}

const fibonacci = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  return memo[n];
}

console.log('fibonacci =>', fibonacci(1000)); // complexity => time: O(n) space: O(n)
// console.log('fibBruteForce =>', fibBruteForce(50)); // complexity => time: O(2n) space: O(n)