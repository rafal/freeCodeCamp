function sum(arr, n) {
  // Only change code below this line
  if (n === 0){
    return 0;
  } else {
    return arr[0] + sum(arr.slice(1), n - 1)
  }
  // Only change code above this line
}
