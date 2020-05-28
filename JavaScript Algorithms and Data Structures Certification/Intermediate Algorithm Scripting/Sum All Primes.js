const isPrime = x => {
  if (x === 0 || x === 1){
    return false
  }
  if (x > 2 && x % 2 === 0) {
      return false
  }
   if (x > 3 && x % 3 === 0) {
      return false
  }
  for (let i = 3 ; i < x; i++){
    if(x % i === 0){
      return false
    }
  }
  return true
}

function sumPrimes(x) {
  let sum=0
  for (let i =2 ; i<=x; i++){
    if (isPrime(i)){
      console.log(i, isPrime(i))
      sum+=i
    }
  }
  return sum
}

sumPrimes(10);