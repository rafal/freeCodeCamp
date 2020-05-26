const squareList = (arr) => {
  // Only change code below this line
  return arr.reduce((x,y) => {
    if (y > 0 && parseInt(y)===y){
      x.push(y*y)
    }
    return x
  }, []);
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
