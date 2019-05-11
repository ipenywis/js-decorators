//Decorator
function readonly(target, property, descriptor) {
  descriptor.writable = false;
  return descriptor;
}

class User {
  constructor(lastName, firstName) {
    this.lastName = lastName;
    this.firstName = firstName;
  }

  @readonly
  getFullName() {
    return this.lastName + " " + this.firstName;
  }
}

User.prototype.getFullName = function() {
  console.log("HACKED!");
};

const user = new User("Maboud", "Islem");
console.log("User: ", user.getFullName());
