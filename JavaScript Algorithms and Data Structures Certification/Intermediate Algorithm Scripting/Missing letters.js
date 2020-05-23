function fearNotLetter(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("")
  let result = undefined
  for (let i = 0; i < str.length - 1; i++){
    if(str[i+1] !== alphabet[alphabet.indexOf(str[i])+1]){
      result = alphabet[alphabet.indexOf(str[i])+1]
    }
  }
  return result
}

fearNotLetter("abce");
