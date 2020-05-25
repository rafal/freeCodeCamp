function convertHTML(str) {
  const chars = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&apos;",
    "\"": "&quot;"
  }
  for(const char in chars){
    str = str.split(char).join(chars[char])
  }
  return str
}

convertHTML("Hamburgers < Pizza < Tacos")