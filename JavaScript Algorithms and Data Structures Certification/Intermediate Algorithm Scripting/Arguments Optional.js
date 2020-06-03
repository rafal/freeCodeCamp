function addTogether(...args) {
  if (args.some(x => typeof x !== "number")) return undefined
  return args.length === 1 ? addTogether.bind(this, args[0]) : args[0] + args[1]
}

console.log(addTogether(2)([3]))
