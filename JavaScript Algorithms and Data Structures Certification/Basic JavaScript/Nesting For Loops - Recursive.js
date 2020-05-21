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

console.log(multiplyAll([[1,2],[3,4],[5,6,7]]))
