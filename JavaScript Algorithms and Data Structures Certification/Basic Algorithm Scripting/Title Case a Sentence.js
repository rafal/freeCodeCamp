function titleCase(str) {
  // Non-regex solution:
  return str.split(" ").map(x => x[0].toUpperCase() + x.slice(1).toLowerCase()).join(" ")
  // Regex solution:
  return str.match(/\S+(?=\s+)|(?<=\s+)\S+/g).map(x => x[0].toUpperCase() + x.slice(1).toLowerCase()).join(" ")
  // Smarter regex solution:
  return str.toLowerCase().replace(/(^|\s)\S/g, x => x.toUpperCase())
}

titleCase("I'm a little tea pot");
