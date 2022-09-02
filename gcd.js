// naive solution
const gcm = (a, b) => {
  let best = 0

  for (let i = 1; i < a+b; i++) {
    if (!(a % i) && !(b % i)) {
      best = i
    }
  }

  return best
}

// console.log(gcm(9, 5))
// console.log(gcm(9, 9))
// console.log(gcm(10, 5))
// console.log(gcm(10, 20))
// console.log(gcm(3918848, 1653264))
// console.log(gcm(391884833322, 165326412231))


// Euclidean Algorithm
const euclid = (a, b) => {
  if (b === 0) return a
  console.log(b, a % b)
  return euclid(b, a % b)
}


function modulo(a, b) {
  console.log(a, b)
  return a - (Math.floor(a / b) * b)
}
// console.log(euclid(9, 5))
// console.log(euclid(9, 9))
// console.log(euclid(357, 234))
// console.log(euclid(391884833322, 165326412231))
console.log(modulo(-100, 7))