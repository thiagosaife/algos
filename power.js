function power(number, exponent) {
  if (exponent === 0) {
    return 1;
  } else {
    return number * power(number, exponent - 1);
  }
}

console.log(power(2, 10));
// power(2, 10);