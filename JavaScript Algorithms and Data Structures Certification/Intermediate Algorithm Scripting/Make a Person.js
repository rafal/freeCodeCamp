var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly
  let firstName = firstAndLast.split(" ")[0]
  let lastName = firstAndLast.split(" ")[1]

  this.getFirstName = function() {
    return firstName;
  };
  this.getLastName = function() {
    return lastName;
  };
  this.setFirstName = function(first) {
    firstName = first;
  };
  this.setLastName = function(last) {
    lastName = last;
  };
  this.setFullName = function(firstAndLast) {
    firstName = firstAndLast.split(" ")[0]
    lastName = firstAndLast.split(" ")[1]
  };
  this.getFullName = function() {
    return firstName + " " + lastName;
  };
  return firstAndLast;
};

var bob = new Person('Bob Ross');
