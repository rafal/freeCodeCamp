function dropElements(arr, func) {
  return arr.find(func) ? arr.slice(arr.findIndex(func)) : []
  // return arr.slice(arr.findIndex(func) >= 0 ? arr.findIndex(func) : arr.length);
}

dropElements([1, 2, 3, 4], function(n) {return n > 5;})