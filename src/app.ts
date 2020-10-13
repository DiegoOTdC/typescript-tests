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

//Add constraints, so TS knows the data needs to be of type object.
function merge2<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj2 = merge2({ name: "Diego", hobbies: ["Sports"] }, { age: 28 });
console.log(mergedObj2);

//Another generic function -> Be specific but flexible at the same time.
//Add an interface, to make sure the element has a length property
interface Lengthy {
  length: number;
}

// as return we want a tuple
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value.";
  if (element.length === 1) {
    descriptionText = "Got 1 element.";
  } else if (element.length > 1) {
    descriptionText = `Got ${element.length} elements.`;
  }
  return [element, descriptionText];
}

//Example of types that work, because they have a length property
console.log(countAndDescribe("Hello there!")); // string
console.log(countAndDescribe(["Sports", "Cooking"])); //array

//Example that won't work
// console.log(countAndDescribe(20)); //number...

//keyof constraint
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value: " + obj[key];
}

extractAndConvert({ name: "Diego" }, "name");

//Generic Class
//we extend T with primitive types, because of how our class works.
class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    //if it doesn't find the item in the storage, return, so do nothing.
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1); // returns -1 if it doesn't find anything, so removes the last one.
  }

  getItems() {
    return [...this.data];
  }
}

//different storages, more specific type definitions.
//string
const textStorage = new DataStorage<string>();
textStorage.addItem("Diego");
textStorage.addItem("Orlando");
textStorage.removeItem("Diego");
console.log(textStorage.getItems());

//number(, or union or whatever we want)
const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();
// const diegoObject = { name: "Diego" };
// objStorage.addItem(diegoObject);
// objStorage.addItem({ name: "Orlando" });
// //...
// objStorage.removeItem(diegoObject);
// console.log(objStorage.getItems());

//2 built-in generic types
//Partial type
interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

//we can do it all in one step
// function createCourseGoal(title: string, description: string, date: Date): CourseGoal{
//     return {title: title, description: description, completeUntil: date}
// }

//but what if we did it step by step
function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  //object that in the end will be a CourseGoal, but initially Partial wraps our own type and makes all these properties optional.
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal; //the end will be a CourseGoal.
}

// Readonly type
//we want to lock the array down, so you can't change it after setting it.
const names: Readonly<string[]> = ["Diego", "Orlando"];
// names.push("George");
// names.pop();
