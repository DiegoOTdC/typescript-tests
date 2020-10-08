//spread operator
const hobbies = ["sports", "cooking"];
const activeHobbies = ["Hiking", ...hobbies];

activeHobbies.push(...hobbies);

const person = {
  name: "Diego",
  age: 28,
};

const copiedPerson = { ...person };
