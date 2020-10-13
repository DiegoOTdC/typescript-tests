//Create interface, always an object, set the types of properties and methods.
interface Person {
  name: string;
  age: number;

  greet(phrase: string): void;
}

//create a variable, set type to (interface) Person.
let user1: Person;

//assign object to variable, where you assign strings and numbers etc to the properties and methods inside of the object.
user1 = {
  name: "Diego",
  age: 28,
  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  },
};

//call on the method.
user1.greet("Hello! My name is");
