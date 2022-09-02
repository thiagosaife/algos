let n = 0;

process.argv.forEach((val) => {
  if (Number(val)) {
    n = Number(val);
  }
});

function P(n = 0) {
  let k = 1;

  while (k < n) {
    console.log(`if all of P(1),...,P(${k}) are true, then P(${k + 1}) is true`);
    console.log(`we have already proved P(1),...,P(${k}), hence P(${k + 1}) is true`);
    k++;
  }

  if (k === n) {
    console.log(`P(${n}) is true`);
  }

}

console.log(P(n));