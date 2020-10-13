// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};

interface FirstName {
  //can set name once, is readonly after that.
  readonly name?: string;
  //question mark after property, tells TS this property is optional.
  outputName?: string;
}

//Create interface, always an object, set the types of properties and methods.
// interfaces can be extended
interface Greetable extends FirstName {
  greet(phrase: string): void;
}

//This class should implement the interface
class Person implements Greetable {
  //optional name in class, doesn't have to be optional, but then make sure to assign a string to name in the constructor as well.
  name?: string;
  age = 28;

  //optional params are defined by adding a ? to the param OR by assigning a default. n: string = "some default string"
  constructor(n?: string) {
    //n is optional, if not.. write: this.name = n; -> to make sure there always is a string assigned to name.
    if (n) {
      this.name = n;
    }
  }

  greet(phrase: string) {
    if (this.name) {
      console.log(phrase + " " + this.name);
    } else {
      console.log("Hi!");
    }
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
user1 = new Person();

//call on the method.
user1.greet("Hello! My name is");
console.log(user1);
