function pairElement(str) {
  const y = {
      G: "C",
      C: "G",
      T: "A",
      A: "T"
    }
  return str.split("").map(x => [x, y[x]])
}

pairElement("GCG");
