function convertToRoman(num) {
  let result = ""
  const romans = {
    1: "I",
    5: "V",
    10: "X",
    50: "L",
    100: "C",
    500: "D",
    1000: "M"
  }
  const numStr = num.toString()
  for (let i = 0 ; i < numStr.length; i++){
    const subNum = +numStr[i] * Math.pow(10, numStr.length - i - 1)
    const digit = +subNum.toString()[0]
    const base = subNum / digit
    if (digit === 0 ) {
      continue
    } else if (digit <= 3){
      result += romans[base].repeat(digit)
    } else if (digit === 4){
      result += romans[base] + romans[base * 5]
    } else if (digit === 5){
      result += romans[base * 5]
    } else if (digit <= 8){
      result += romans[base * 5] + romans[base].repeat(digit - 5)
    } else if (digit === 9) {
      result += romans[base] + romans[base * 10]
    }
  }
  console.log(result)
  return result

  // Regex 1-liner solution
  return "I"
    .repeat(num)
    .replace(/IIIII/g, "V")
    .replace(/VV/g, "X")
    .replace(/XXXXX/g, "L")
    .replace(/LL/g, "C")
    .replace(/CCCCC/g, "D")
    .replace(/DD/g, "M")
    .replace(/IIII/, "IV")
    .replace(/XXXX/, "XL")
    .replace(/CCCC/, "CD")
    .replace(/VIV/, "IX")
    .replace(/LXL/, "XC")
    .replace(/DCD/, "CM")
}

convertToRoman(99);
