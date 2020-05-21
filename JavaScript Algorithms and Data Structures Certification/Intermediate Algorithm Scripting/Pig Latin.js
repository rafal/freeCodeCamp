function translatePigLatin(str) {
  return /^[^aeiou]/.test(str) ? str.slice(str.match(/^[^aeiou]+/)[0].length) + str.match(/^[^aeiou]+/)[0] + "ay" : str + "way"
}

translatePigLatin("algorithm");
