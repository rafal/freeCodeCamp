function bouncer(arr) {
  // return arr.filter(x => x);
  // return arr.filter(x => !!x);
  return arr.filter(Boolean);
}

bouncer([7, "ate", "", false, 9]);
