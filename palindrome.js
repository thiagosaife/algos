
function palindrome(str) {
  let newString = ''
  let newString2 = str

  if (Array.isArray(newString2)) {
    newString2 = newString2.join('')
  }

  for (let i = newString2.length; i >= 0; i--) {
    if (newString2[i]) {
      newString += newString2[i]
    }
  }

  return newString === newString2
}

console.log(palindrome('racecar'))
console.log(palindrome('hello'))
console.log(palindrome('hannah'))
console.log(palindrome('madam'))
console.log(palindrome([1, 2, 3, 2, 1]))