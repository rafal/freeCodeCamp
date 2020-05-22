function translatePigLatin(str) {
  let consonantsReg = /^[^aeiou]+/
  
  if (consonantsReg.test(str)) {
    let consonants = str.match(consonantsReg)[0]
    return str.slice(consonants.length) + consonants + "ay"
  } else {
    return str + "way"
  }
  // return consonantsReg.test(str)
  //   ? str.slice(str.match(consonantsReg)[0].length) + str.match(consonantsReg)[0] + "ay"
  //   : str + "way"
}

console.log(translatePigLatin("algorithm"))
