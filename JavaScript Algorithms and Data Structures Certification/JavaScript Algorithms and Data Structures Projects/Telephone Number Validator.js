function telephoneCheck(str) {
  // telephoneCheck("555-555-5555")
  let reg1 = /^\d{3}-\d{3}-\d{4}$/
  // telephoneCheck("1 555-555-5555")
  let reg2 = /^1 \d{3}-\d{3}-\d{4}$/
  // telephoneCheck("1 (555) 555-5555")
  let reg3 = /^1 \(\d{3}\) \d{3}-\d{4}$/
  // telephoneCheck("5555555555")
  let reg4 = /^\d{10}$/
  // telephoneCheck("(555)555-5555")
  let reg5 = /^\(\d{3}\)\d{3}-\d{4}$/
  // telephoneCheck("1(555)555-5555"
  let reg6 = /^1\(\d{3}\)\d{3}-\d{4}$/
  // telephoneCheck("1 555 555 5555")
  let reg7 = /^1 \d{3} \d{3} \d{4}$/

  let rules = [reg1, reg2, reg3, reg4, reg5, reg6, reg7]

  return rules.some(rule => rule.test(str))
}

telephoneCheck("555-555-5555");
