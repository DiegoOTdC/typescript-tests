type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

//if you want to use interfaces instead of types:
//interface ElevatedEmployee extends Employee, Admin {}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Diégo",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

//function overload -> write all possibilities with the correct return type.
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: Combinable, b: Combinable) {
  //type guard using typeof
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

//without the function overload, result would be of type : Combinable, so you would not be able to use string methods like .split()
const result = add("Diego", "Costa");
result.split(" ");

const fetchedUserData = {
  id: "d1",
  name: "Diego",
  job: { title: "CEO", description: "My own company" },
};

console.log(fetchedUserData?.job?.title);

// type UnknownEmployee = Employee | Admin;

// function printEmployeeInfo(emp: UnknownEmployee) {
//   console.log("Name: " + emp.name);

//   //type guard using ' in '
//   if ("privileges" in emp) {
//     console.log("Privileges: " + emp.privileges);
//   }

//   if ("startDate" in emp) {
//     console.log("Start Date: " + emp.startDate);
//   }
// }

// //possible output
// printEmployeeInfo(e1);
// printEmployeeInfo({ name: "Orlando", privileges: ["write-emails"] });
// printEmployeeInfo({ name: "George", startDate: new Date() });

// class Car {
//   drive() {
//     console.log("Driving...");
//   }
// }

// class Truck {
//   drive() {
//     console.log("Driving a truck...");
//   }

//   loadCargo(amount: number) {
//     console.log("Loading cargo ..." + amount);
//   }
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(vehicle: Vehicle) {
//   vehicle.drive();
//   //can use in again
//   //   if ("loadCargo" in vehicle) {
//   //     vehicle.loadCargo(1000);
//   //   }

//   //or useinstanceof = operator in JS. JS is able to figure out if "vehicle" was based on "Truck" constructor function. (classes are translated to constructor functions)
//   if (vehicle instanceof Truck) {
//     vehicle.loadCargo(1000);
//   }
// }

// useVehicle(v1);
// useVehicle(v2);

// interface Bird {
//   type: "bird"; //literal type
//   flyingSpeed: number;
// }

// interface Horse {
//   type: "horse";
//   runningSpeed: number;
// }

// type Animal = Bird | Horse;

// function moveAnimal(animal: Animal) {
//   let type;
//   let speed;
//   switch (animal.type) {
//     case "bird":
//       type = animal.type;
//       speed = animal.flyingSpeed;
//       break;
//     case "horse":
//       type = animal.type;
//       speed = animal.runningSpeed;
//   }
//   console.log(`${type} moving at speed: ${speed}`);
// }

// moveAnimal({ type: "bird", flyingSpeed: 10 });
// moveAnimal({ type: "horse", runningSpeed: 60 });

// //type casting: 1st way.
// // const userInputElement = <HTMLInputElement>(
// //   document.getElementById("user-input")!
// // );

// //type casting: 2nd way. (works with React, because of JSX syntax)
// // const userInputElement = document.getElementById(
// //   "user-input"
// // )! as HTMLInputElement;

// //If you are not sure this element won't return null, use an if statement instead of ! at the end.
// const userInputElement = document.getElementById("user-input");

// if (userInputElement) {
//   (userInputElement as HTMLInputElement).value = "Hi there!";
// }

// //index properties: write flexible code. we don't need to know the amount of properties, or what we will name them, just the types.
// interface ErrorContainer {
//   //You can add a pre-defined property of the same type as the prop below:
//   // id: string;
//   [prop: string]: string;
// }

// //now we can add an object containing all the error messages for example.
// const errorBag: ErrorContainer = {
//   email: "Not a valid email!",
//   userName: "Must start with a capital character!",
// };
