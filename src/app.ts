//classes start with upper case
class Department {
  name: string;

  //method is called on creation, takes a string in this case that we assign to name property.
  constructor(n: string) {
    this.name = n;
  }

  //method + this keyword, adding type 'Department' to 'this', creates extra safety.
  describe(this: Department) {
    console.log("Department: " + this.name);
  }
}

//create the Department object, passing it a string. store in const
const accounting = new Department("Diego");

console.log(accounting);

accounting.describe();

//'this' refers to the thing that is responsible for calling the method. accountingCopy in this case, which has no name property. Thus result, Department: undefined.
//Add a name property, to have success here.
const accountingCopy = { name: "Orlando", describe: accounting.describe };
accountingCopy.describe();
