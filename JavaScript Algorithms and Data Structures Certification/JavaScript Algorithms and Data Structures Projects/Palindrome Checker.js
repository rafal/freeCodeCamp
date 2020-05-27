function palindrome(str) {
  const s = str.toLowerCase().match(/[a-z\d]/g).join("")
  return s === s.split("").reverse().join("")
}



palindrome("1 eye for of 1 eye.")