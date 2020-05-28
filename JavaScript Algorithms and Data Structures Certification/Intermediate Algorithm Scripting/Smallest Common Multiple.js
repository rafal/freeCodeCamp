function smallestCommons(xs) {
  let min = Math.min(...xs)
  let max = Math.max(...xs)
  let product = 1
  for (let i = min; i <= max; i++){
    product *= i
  }
  let ys = Array.from(Array(max-min+1).keys()).map(x => x + min)
  let scm = undefined

  for (let i = min * max; i <= product; i++){
    if (ys.every(y => i % y === 0)){
      console.log(i)
      scm = i
      break
    }
  }
  return scm
}
smallestCommons([1, 13])