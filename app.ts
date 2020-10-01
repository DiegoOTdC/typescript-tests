// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; //this is a Tuple!
// } = {
const person = {
  name: "Diego",
  age: 28,
  hobbies: ["Programming", "Problem Solving"],
  role: [2, "author"], //array of 2 items, first always number, second always string. -> union type
};

person.role.push("admin"); // we can push this , TS doesn't know we just want 2 elements.
person.role[1] = 10; // TS also doesn't know we want the 2nd one to be a string.

let favoriteActivities: string[]; //an array of strings

favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
