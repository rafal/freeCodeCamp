function dropElements(arr, func) {
  let newArr = [...arr]
  for(let i =0 ; i < arr.length; i++){
    if (func(arr[i])) {
      return arr.slice(i)
    }else{
      newArr.splice((newArr.indexOf(arr[i])), 1)
    }
  }
  return newArr;
}

dropElements([1, 2, 3, 4], function(n) {return n > 5;})