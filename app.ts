// Type Aliases & Object Types
type User = { name: string; age: number };
const u1: User = { name: "Max", age: 30 };
console.log(u1);

//YOU CAN SIMPLIFY THIS CODE:
// function greet(user: { name: string; age: number }) {
//   console.log("Hi, I am" + user.name);
// }

// function isOlder(user: { name: string; age: number }, checkAge: number) {
//   return console.log(checkAge > user.age);
// }

// INTO THIS:
type User2 = { name: string; age: number };

function greet(user: User2) {
  console.log("Hi, I am " + user.name);
}

function isOlder(user: User2, checkAge: number) {
  return console.log(checkAge > user.age);
}

///////////////////

const person1 = { name: "Diégo", age: 28 };
const age = 40;

greet(person1);
isOlder(person1, age);
