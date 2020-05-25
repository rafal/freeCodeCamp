function uniteUnique(...args) {
  let mySet = new Set()
  args.forEach(x => {
    x.forEach(y =>{
      mySet.add(y)
    })
  })
  return [...mySet]
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
