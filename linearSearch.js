const doLinearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) { // O(n)
    if (arr[i] === target) { // O(1)
      return i // O(1)
    }
  }
  return -1 // O(1)
}

const arr = [1, 20, 35, 69, 54, 87]
console.log(doLinearSearch(arr, 87))