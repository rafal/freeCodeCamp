function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  product = arr.reduce((x, y) => x * y.reduce((a, b) => a * b), 1)
  // Only change code above this line
  return product;
}

multiplyAll([[1,2],[3,4],[5,6,7]]);
