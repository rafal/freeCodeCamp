function repeatStringNumTimes(str, num) {
  return num < 1 ? "" : str + repeatStringNumTimes(str, num - 1)
}

console.log(repeatStringNumTimes("abc", 3))