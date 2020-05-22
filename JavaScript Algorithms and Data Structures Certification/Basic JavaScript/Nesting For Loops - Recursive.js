// const multiplyArr = arr => {
//   if (arr.length === 0){
//     return arr
//   } else if (arr.length === 1){
//     return arr[0]
//   } else {
//     return arr[0]*multiplyArr(arr.slice(1))
//   }
// }

// console.log(multiplyArr([1,2,3]))

function multiplyAll(arr) {
  if (arr.length === 0){
    return arr
  } else if (arr.length === 1){
    return Array.isArray(arr[0]) ? multiplyAll(arr[0]) : arr[0]
  } else {
    return Array.isArray(arr[0]) ? multiplyAll(arr[0]) * multiplyAll(arr.slice(1)) : arr[0] * multiplyAll(arr.slice(1))
  }
}

const simpleMulti = arr => {
  return arr.length <= 1
    ? arr[0]
    : arr[0] * simpleMulti(arr.slice(1))
}
console.log(simpleMulti([1,2,3,4,5]))

const multi = arr => {
  return arr.length <= 1
    ? Array.isArray(arr[0])
      ? multi(arr[0])
      : arr[0]
    : Array.isArray(arr[0])
      ? multi(arr[0]) * multi(arr.slice(1))
      : arr[0] * multi(arr.slice(1))
}

const multi2 = arr => {
  return Array.isArray(arr[0])
    ? arr.length <= 1
      ? multi2(arr[0])
      : multi2(arr[0]) * multi2(arr.slice(1))
    : arr.length <= 1
      ? arr[0]
      : arr[0] * multi2(arr.slice(1))
}
const multi3 = arr => arr.reduce((x, y) => {
  return x *= Array.isArray(y)
    ? multi3(y)
    : y
}, 1)
console.log(multi3([[],1,2,[3]]))

console.log(multi([[1,2],[3,4],[5,6,7,[2, [2]]]]));