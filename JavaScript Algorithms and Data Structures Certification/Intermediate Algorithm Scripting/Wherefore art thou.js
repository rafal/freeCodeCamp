function whatIsInAName(collection, source) {
  // Only change code below this line
  return collection.filter(x => Object.entries(source).every(y => x[y[0]] === y[1]))
  // Only change code above this line
}

whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }) 