const firstNonDup = (s) => {
  const memo = {}

  for (let i = 0; i < s.length; ++i) {
    if (s[i] in memo) {
      memo[s[i]] = memo[s[i]] + 1
    } else {
      memo[s[i]] = 1
    }
  }
  console.log(memo)

  const found = Object.keys(memo).find((k) => memo[k] === 1)
  if (found) return found
  return '_'
}

console.log(firstNonDup('aaabcccdeeef'))
console.log(firstNonDup('aaabcccdeeefaaabcccdeeefaaabcccdeeefaaabcccdeeefaaabcccdeeefaaabcccdeeefaaabcccdeeefaaabcccdeeefyaaabcccdeeefaaabcccdeeefaaabcccdeeefaaabcccdeeefaaabcccdeeefaaabcccdeeefaaabcccdeeef'))
console.log(firstNonDup('abcdef'))
console.log(firstNonDup('aabbccddeeff'))