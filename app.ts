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

//The Never Type -> does not return nothing, it returns never! Explicitely assign the never type.
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code }; // we can throw any object or any value as an error.
  //   while(true){}
}
generateError("An error occurred!", 500);
