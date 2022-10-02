
function products(array) {
  const products = []
  for (let i = 0; i < array.length; i++) {
    let product = 1
    for (let j = 0; j < array.length; j++) {
      if (i !== j) {
        product *= array[j]
      }
    }
    products.push(product)
  }
  return products;
}
// time complexity: O(n^2)
// space complexity: O(n)

// console.log(products([1, 2, 3, 4]))
// console.log(products([0, 2, 3, 4]))
console.log(products([-1, 2, 3, 4]))