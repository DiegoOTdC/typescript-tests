//Union type / output numbers and strings (or any kind of types really)

function combine(
  input1: number | string,
  input2: number | string,
  resultConversion: "as-number" | "as-text" // only a few values, use a union type with your literal type. <- do this for extra type safety!
) {
  let result;
  // run time type check -> depending on the logic, you do not always need to do this.
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
  //   if (resultConversion === "as-number") {
  //     return +result; // parseFloat(result)
  //   } else {
  //     return result.toString();
  //   }
}

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedStringAges = combine("30", "26", "as-number");
console.log(combinedStringAges);

const combinedNames = combine("Max", "Anna", "as-text");
console.log(combinedNames);
