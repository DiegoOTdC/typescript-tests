//Create interface, always an object, set the types of properties and methods.
interface Greetable {
  //can set name once, is readonly after that.
  readonly name: string;

  greet(phrase: string): void;
}

//This class should implement the interface
class Person implements Greetable {
  name: string;
  age = 28;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
}

//create a variable, set type to (interface) Person / interface.
let user1: Greetable;

//assign object to variable, where you assign strings and numbers etc to the properties and methods inside of the object.
// user1 = {
//   name: "Diego",
//   age: 28,
//   greet(phrase: string) {
//     console.log(phrase + " " + this.name);
//   },
// };

// create new Person, feed in the name
user1 = new Person("Diego");

//call on the method.
user1.greet("Hello! My name is");
console.log(user1);
