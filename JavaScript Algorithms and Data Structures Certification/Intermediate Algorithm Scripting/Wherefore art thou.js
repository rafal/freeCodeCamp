function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line
  Object.values(collection).forEach(x => {
    if (Object.entries(source).every(y => x[y[0]] === y[1])) arr.push(x)
  })
  // Only change code above this line
  return arr;
}

whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }) 