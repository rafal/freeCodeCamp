// console.log(Array.from(Array(10).keys()).map(x=>x+1).map(fib)) --- memorize this

// fib
const fib = x => {
  let s1 = 1
  let s2 = 1
  let temp = 0
  for (let i = 2 ; i < x; i++){
    temp = s1
    s1 = s2
    s2 = temp + s2
  }
  return s2
}

const sumFibs = x => {
  let s1 = 1
  let s2 = 1
  let sum = 2
  let temp = 0
  for (let i = 2 ; i < x; i++){
    temp = s1
    s1 = s2
    s2 = temp + s2
    if (s2 > x) break
    if (s2 % 2 === 1) sum+=s2
  }
  return sum
}


console.log(sumFibs(10))
