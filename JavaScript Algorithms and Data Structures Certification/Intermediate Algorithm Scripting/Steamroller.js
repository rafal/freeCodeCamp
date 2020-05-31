function steamrollArray(arr) {
  // return [].concat(Array.isArray(arr[0]) ? steamrollArray(arr[0]).concat(steamrollArray(arr.slice(1))) : [arr[0], ...(steamrollArray(arr.slice(1)))])
  return arr.length === 0 ? [] : arr.length === 1
    ? Array.isArray(arr[0])
      ? steamrollArray(arr[0])
      : [arr[0]]
    : Array.isArray(arr[0])
      ? steamrollArray(arr[0]).concat(steamrollArray(arr.slice(1)))
      : [arr[0], ...(steamrollArray(arr.slice(1)))]
}

console.log(steamrollArray([1, [], [3, [[4]]]]))
