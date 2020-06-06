function convertToRoman(num) {
 return "I"
  .repeat(num)
  .replace(/IIIII/g, "V")
  .replace(/VV/g, "X")
  .replace(/XXXXX/g, "L")
  .replace(/LL/g, "C")
  .replace(/CCCCC/g, "D")
  .replace(/DD/g, "M")
  .replace("IIII", "IV")
  .replace("XXXX", "XL")
  .replace("CCCC", "CD")
  .replace(/VIV/g, "IX")
  .replace(/LXL/g, "XC")
  .replace(/DCD/g, "CM")
}

convertToRoman(99);
