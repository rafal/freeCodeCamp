function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line
  console.log(Object.entries(source))
  Object.values(collection).forEach(x => {
    console.log(Object.entries(source).every(y => {
      return x.hasOwnProperty(y[0]) && x[y[0]] === y[1]
    }))
    if(Object.entries(source).every(y => {
      return x.hasOwnProperty(y[0]) && x[y[0]] === y[1]
    })) arr.push(x)
  })

  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }) 