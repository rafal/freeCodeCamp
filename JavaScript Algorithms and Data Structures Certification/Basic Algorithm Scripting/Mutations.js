function mutation(arr) {
  return Array.from(arr[1].toLowerCase()).every(x => arr[0].toLowerCase().includes(x))
}

mutation(["hello", "hey"]);
