//abstract class can't be instantiated themselves, can only be inherited from.
abstract class Department {
  //static property
  static fiscalYear = 2020;

  //protected is like private, but also available in classes that extend this class. (inherited)
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {}

  //create static method
  static createEmployee(name: string) {
    return { name: name };
  }

  //abstract methods/properties need to be inside an abstract class
  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

//class inherents from other class. As long as we don't add a constructor here, it uses the Department's constructor.
class ITDepartment extends Department {
  //admins: string[];
  constructor(id: string, public admins: string[]) {
    //add suoer in inherting class (before anything else, like "this"), execute as function. Super class constructor of base class (department's constructor)
    super(id, "IT");
    //this.admins = admins
  }

  //since ITDepartment inherits from Department class and describe method is abstract, ITDepartment needs to implement the describe method here.
  describe() {
    console.log("IT Department - ID: " + this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  //static property accessible from inside the class, value will be of the class type itself.
  private static instance: AccountingDepartment;

  //getter = property where you execute a function when you retrieve a value, that allows dev to add more complex logic.
  get mostRecentReport() {
    //has to return something
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found.");
  }

  //use a name related to the property that should be set. Takes an argument.
  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value!");
    }
    this.addReport(value);
  }

  //add private to constructor, so we'll only be able to create one instance of this class. (so 1 AccountingDepartment)
  private constructor(id: string, public reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  //Since constructor is private, we need static methods to be able to get inside this class.
  static getInstance() {
    //Return existing instance or create new one.
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment("d2", []);
    return this.instance;
  }

  describe() {
    console.log("Accounting Department - ID: " + this.id);
  }

  //overriding methods of base class, add own implementation.
  addEmployee(name: string) {
    if (name === "Diego") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

//don't need to add new in front of deparment now, call directly on the class, we use the class as a grouping mechanism.
const employee1 = Department.createEmployee("Diego");
console.log(employee1, Department.fiscalYear);

const it = new ITDepartment("d1", ["Diego"]);

it.addEmployee("George");
it.addEmployee("Jose");

it.describe();
it.printEmployeeInformation();

console.log(it);

//You need to call the AccountingDepartment differntly now.
// const accounting = new AccountingDepartment("d2", []);
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();

//they are both equal, the same object/instance. Since we only have one instance with the singleton pattern.
console.log(accounting, accounting2);

//setting a value to this, wil active the setter method.
accounting.mostRecentReport = "Year End Report";
accounting.addReport("something went wrong...");

//access as property, not as a function.
console.log(accounting.mostRecentReport);

accounting.addEmployee("Diego");
accounting.addEmployee("Orlando");

// accounting.printReports();
// accounting.printEmployeeInformation();
accounting.describe();
