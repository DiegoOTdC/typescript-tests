//classes start with upper case
class Department {
  //   private readonly id: string;
  //   private name: string;
  //Private(modifier) property/field = a property that is only accessible from inside the class.  //"Public" is the default.
  private employees: string[] = [];

  //method is called on creation, takes a string in this case that we assign to name property.
  //readonly = property only initialized once, can't change afterwards.
  constructor(private readonly id: string, public name: string) {
    //write private and public in front of these properties, for cleaner code.
    // this.id = id;
    // this.name = n;
  }

  //method + this keyword, adding type 'Department' to 'this', creates extra safety.
  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
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
const accounting = new Department("d1", "Accounting");

accounting.addEmployee("George");
accounting.addEmployee("Jose");

// accounting.employees[2] = "Anna"; //alternative way, like this, should not be supported -> create private properties.

accounting.describe();
accounting.printEmployeeInformation();

//'this' refers to the thing that is responsible for calling the method. accountingCopy in this case, which has no name property. Thus result, Department: undefined.
//Add a name property, to have success here.
// const accountingCopy = { name: "Orlando", describe: accounting.describe };
// accountingCopy.describe();
