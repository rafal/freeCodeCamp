function countOnline(usersObj) {
  // Only change code below this line
  return Object.values(usersObj).filter(x => x.online).length
  
  // return Object.values(usersObj).reduce((x, y) => ({online}) ? ++x : x, 0)
  
  // let count = 0
  // for (let user in usersObj){
  //   if (usersObj[user].online) count++
  // }
  // return count
  // Only change code above this line
}
