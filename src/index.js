function isLoggedIn(status) {
  return function(classRef) {
    return class extends classRef {
      constructor(lastName, firstName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.isLoggedIn = status || false;
      }
    };
  };
}

@isLoggedIn()
class User {
  constructor(lastName, firstName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const user = new User("Brooks", "Alex");
console.log("User isLoggedIN ", user.isLoggedIn);
