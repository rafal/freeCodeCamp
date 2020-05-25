function confirmEnding(str, target) {
  // Regex solution:
  return new RegExp(target + "$").test(str)
  
  // Better solution:
  return str.slice(str.length - target.length) === target
}

confirmEnding("Bastian", "n");
