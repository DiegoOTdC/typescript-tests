//type unkown

let userInput: unknown; // better to try to describe the type instead of using unknown.
let userName: string;

userInput = 5;
userInput = "Max";
//type unkown is not assignable to type string
// userName = userInput;

//check the type that is stored in userInput, before you assign it.
if (typeof userInput === "string") {
  userName = userInput;
}
