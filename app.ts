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
function printResult(num: number) {
  console.log("Result: " + num);
}

//Technical difference: You can use undefined if you return nothing in the function.
function printResult2(num: number): undefined {
  console.log("Result: " + num);
  return;
}

printResult(add(5, 12));

//use return value of a function that does return anything, we get -undefined-
console.log(printResult(add(5, 12)));

//undefined is an actualy type ~however useful it may be
let someValue: undefined;
