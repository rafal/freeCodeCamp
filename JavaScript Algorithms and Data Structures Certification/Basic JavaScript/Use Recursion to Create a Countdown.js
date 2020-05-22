// Only change code below this line
const countup = n => {
  return (n < 1) ? [] : [...countup(n-1), n]
}
const countdown = n => {
  return (n < 1) ? [] : [n, ...countdown(n-1)]
}
// Only change code above this line
console.log(countup(5))

console.log([55, ...[44, ...[33, ...[22, ...[11, ...[]]]]]])
