function convertHTML(str) {
  const htmlEntities  = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&apos;",
    '"': "&quot;"
  }
  // Solution #1:
  // for(const char in htmlEntities){
  //   str = str.split(char).join(htmlEntities[char])
  // }
  // return str

  // One-liner regex solution:
  // return str.replace(/[&<>"']/g, char => htmlEntities[char])

  // One-liner solution without regex:
  return str.split("").map(char => htmlEntities[char] || char).join("")
}

convertHTML("Hamburgers < Pizza < Tacos")