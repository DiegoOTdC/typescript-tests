function add(num1: number, num2: number, showResult: boolean) {
  //   if (typeof num1 === "number" && typeof num2 === "number") {
  //     throw new Error("Incorrect input!");
  //   }
  if (showResult) {
    console.log(num1 + num2);
  } else {
    return num1 + num2;
  }
}

const number1 = 15;
const number2 = 2.3;
const printResult = true;

add(number1, number2, printResult);
