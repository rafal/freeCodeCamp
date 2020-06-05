function convertToRoman(num) {
  const romans = {
    1: "I",
    2: "II",
    3: "III",
    5: "V",
    10: "X",
    50: "L",
    100: "C",
    500: "D",
    1000: "M"
  }
  let basis;
  if (num <= 3){
    basis = "I"
  } else if (num <= 8) {
    basis = "V"
  } else if (num <= 39){
    basis = "X"
  } else if (num <= 89){
    basis = "L"
  } else if (num <= 399){
    basis = "C"
  } else if (num <= 899){
    basis = "D"
  } else if (num <= 3999){
    basis = "M"
  }
  console.log(basis)
  let result = ""
  if((""+num)[0] <= 3){
    console.log(basis.repeat((""+num)[0]))
  }
  return num;
}

convertToRoman(36);
