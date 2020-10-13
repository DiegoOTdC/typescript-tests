//spread operator
const hobbies = ["sports", "cooking"];
const activeHobbies = ["Hiking", ...hobbies];

activeHobbies.push(...hobbies);

const person = {
  firstName: "Diego",
  age: 28,
};

const copiedPerson = { ...person };

//rest params

const add = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addedNumbers = add(5, 10, 2, 3.6);

console.log(addedNumbers);

//array and object destructuring
const [hobby1, hobby2, ...remainingHobbies] = hobbies;

//rename property
const { firstName: userName, age } = person;

console.log(userName, age);
