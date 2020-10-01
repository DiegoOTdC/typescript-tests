// const person: {
//   name: string;
//   age: number;
// } = {
const person = {
  name: "Diego",
  age: 28,
  hobbies: ["Programming", "Problem Solving"],
};

let favoriteActivities: string[]; //an array of strings
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
