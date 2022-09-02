function EuclidesGCD (m, n) {
  // if (m < n) {
  //   let t = m
  //   m = n
  //   n = t
  // }
  let r = m%n
  if (r === 0) {
    return n
  } else {
    // m = n
    // n = r
    return EuclidesGCD(n, (m%n))
  }
}

console.log('euclides =>', EuclidesGCD(56, 32))