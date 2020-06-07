function rot13(str) {
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  return str.split("").map(x => alphabet.includes(x) ? alphabet.indexOf(x) : x).map(x => {
    if (typeof x === "number" && x > 12){
      return x - 13
    } else if (typeof x === "number"){
      return x + alphabet.length - 13
    } else {
      return x
    }
  }).map(x => typeof x === "number" ? alphabet[x] : x).join("")
}

console.log(rot13("SERR PBQR PNZC"))
