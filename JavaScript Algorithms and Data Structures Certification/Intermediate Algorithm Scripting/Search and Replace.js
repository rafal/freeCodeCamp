function myReplace(str, before, after) {
  // /[a-z]/.test(before[0])
  //   ? after = after[0].toLowerCase().concat(after.slice(1))
  //   : after = after[0].toUpperCase().concat(after.slice(1))
  if (/[A-Z]/.test(before[0])) after = after[0].toUpperCase().concat(after.slice(1))
  return str.replace(before, after);
}

console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"))
