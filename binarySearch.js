const l1 = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73]
const l2 = [10, 15, 20, 25, 30, 35, 35, 40]
const l3 = [10, 20, 30, 40, 50, 60, 70]

const binarySearch = (l, target) => {
  let left = 0
  let right = l.length - 1
  while (left <= right) {
    const middle = Math.floor((left + right) / 2)
    console.table({ left, right, middle });
    
    if (l[middle] === target) {
      return middle
    } else if (l[middle] < target) {
      left = middle + 1
    } else {
      right = middle - 1
    }
  }
  return -1
}

// console.log(binarySearch(l1, 33))
// console.log(binarySearch(l2, 30))
console.log(binarySearch(l3, 50))