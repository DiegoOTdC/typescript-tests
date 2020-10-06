//function return Types & "Void"

//return a number
function add(n1: number, n2: number): number {
  return n1 + n2;
}

// //wanting return string, gives error (don't need to specify like I did here)
// function add2(n1: number, n2: number): string {
//     return n1 + n2;
//   }

// void type - don't need to specify like you did above. A function can't be undefined (even though it may be), therefor we use void.
// function printResult(num: number) {
//   console.log("Result: " + num);
// }

//Technical difference: You can use undefined if you return nothing in the function. Most of the time you will use void, instead of undefined. You can also use void in this case. use VOID!
function printResult2(num: number): undefined {
  console.log("Result: " + num);
  return;
}

// printResult(add(5, 12));

// //use return value of a function that does return anything, we get -undefined-
// console.log(printResult(add(5, 12)));

//undefined is an actualy type ~however useful it may be
let someValue: undefined;

//Function Types
let combineValues: (a: number, b: number) => number; // combineValues takes a function with 2 numbers as params and returns 1 number.
//combineValues = printResult;   <- is not possible anymore.
combineValues = add;
console.log(combineValues(8, 8));

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  // by specifying void, we ignore any result, we do nothing with return. cb takes a number and returns nothing.
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 20, (result) => {
  console.log(result);
});
