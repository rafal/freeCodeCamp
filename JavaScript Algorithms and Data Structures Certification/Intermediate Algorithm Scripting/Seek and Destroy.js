function destroyer() {
  let args = Array.from(arguments)
  return args.reduce((acc, curr) => acc.filter(x => x !== curr))
}

destroyer([3, 5, 1, 2, 2], 2, 3, 5) 
