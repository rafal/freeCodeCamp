function chunkArrayInGroups(arr, size) {
  const xs = []
  for (let i = 0; i < arr.length; i += size){
    xs.push(arr.slice(i, i + size))
  }
  return xs
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)
