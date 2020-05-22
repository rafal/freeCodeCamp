const rangeOfNumbers = (startNum, endNum) => {
  return startNum === endNum ? [startNum] : [startNum, ...rangeOfNumbers(startNum + 1, endNum)]
};
console.log(rangeOfNumbers(5,10))