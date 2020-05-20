function spinalCase(str) {
  return str.split(/[^A-Za-z]|(?=[A-Z])/).join("-").toLowerCase();
}

spinalCase('This Is Spinal Tap');
