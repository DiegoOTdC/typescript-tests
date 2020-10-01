function add(num1: number, num2: number) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    throw new Error("Incorrect input!");
  }
  return num1 + num2;
}

const number1 = 15;
const number2 = 2.3;

const result = add(number1, number2);
console.log(result);
