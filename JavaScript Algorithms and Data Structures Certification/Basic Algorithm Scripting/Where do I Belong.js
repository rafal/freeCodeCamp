function getIndexToIns(arr, num) {
  // Clever solution:
  return arr.filter(x => num > x).length
  // Another solution:
  return arr.concat(num).sort((a, b) => a - b).indexOf(num)
}

getIndexToIns([40, 60], 50);
