//classes start with upper case
class Department {
  name: string;
  //Private property/field = a property that is only accessible from inside the class.
  private employees: string[] = [];

  //method is called on creation, takes a string in this case that we assign to name property.
  constructor(n: string) {
    this.name = n;
  }

  //method + this keyword, adding type 'Department' to 'this', creates extra safety.
  describe(this: Department) {
    console.log("Department: " + this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

//create the Department object, passing it a string. store in const
const accounting = new Department("Diego");

console.log(accounting);

accounting.addEmployee("George");
accounting.addEmployee("Jose");

// accounting.employees[2] = "Anna"; //alternative way, like this, should not be supported.

accounting.describe();
accounting.printEmployeeInformation();

//'this' refers to the thing that is responsible for calling the method. accountingCopy in this case, which has no name property. Thus result, Department: undefined.
//Add a name property, to have success here.
// const accountingCopy = { name: "Orlando", describe: accounting.describe };
// accountingCopy.describe();
