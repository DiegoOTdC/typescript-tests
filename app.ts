function add(num1: number, num2: number, showResult: boolean, phrase: string) {
  //   if (typeof num1 === "number" && typeof num2 === "number") {
  //     throw new Error("Incorrect input!");
  //   }
  if (showResult) {
    console.log(phrase + num1 + num2);
  } else {
    return num1 + num2;
  }
}

const number1 = 15;
const number2 = 2.3;
const printResult = true;
const resultPhrase = "Result is: ";

add(number1, number2, printResult, resultPhrase);
