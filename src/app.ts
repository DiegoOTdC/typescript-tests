// //built-in generics -> allow you to get additional type information.
// //Array : Holds data with certain types
// const names: Array<string> = []; //string[]
// names[0].split(" "); //if no additional type info was added, you could have numbers in the array, which you can't use this method on.

// //Promise : returns data with certain type
// //this example doesn't give an error, since you use any. In run time you will receive an error, since you can't use that split() method on a number.
// const promise: Promise<any> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(10);
//   }, 2000);
// });

// promise.then((data) => {
//   data.split(" ");
// });

//Creating Generic Function
//function merge(objA: Object, objB: Object) => is too vague, you can't do the console.log at the end, because mergedObj wouldn't know if it had age or name or wichever property.
//tell TS that you know objA and objB will most likely be 2 different kind of objects and to then return the intersection of the data.
// function merge<T, U>(objA: T, objB: U) {
//   return Object.assign(objA, objB);
// }

// const mergedObj = merge({ name: "Diego", hobbies: ["Sports"] }, { age: 28 });
// console.log(mergedObj.age);

//Constraints
//This won't give an error, but is wrong nontheless, since Object.assign requires 2 objects, and we give an object and a number.
function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "Diego", hobbies: ["Sports"] }, 28);
console.log(mergedObj);

//Add constraints like this:
function merge2<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj2 = merge2({ name: "Diego", hobbies: ["Sports"] }, { age: 28 });
console.log(mergedObj2);
