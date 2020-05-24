let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(obj) {
  // Only change code below this line
  // let users = ['Alan', 'Jeff', 'Sarah', 'Ryan']
  // return users.every(user => Object.keys(obj).includes(user))
  return ['Alan', 'Jeff', 'Sarah', 'Ryan'].every(x => x in obj)
  return !!(obj['Alan'] && obj['Jeff'] && obj['Sarah'] && obj['Ryan'])
  // Only change code above this line
}

console.log(isEveryoneHere(users));
