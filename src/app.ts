class Department {
  //static property
  static fiscalYear = 2020;

  //protected is like private, but also available in classes that extend this class. (inherited)
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {}

  //create static method
  static createEmployee(name: string) {
    return { name: name };
  }

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

//class inherents from other class. As long as we don't add a constructor here, it uses the Department's constructor.
class ITDepartment extends Department {
  //admins: string[];
  constructor(id: string, public admins: string[]) {
    //add suoer in inherting class (before anything else, like "this"), execute as function. Super class constructor of base class (department's constructor)
    super(id, "IT");
    //this.admins = admins
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

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

  constructor(id: string, public reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
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

const accounting = new AccountingDepartment("d2", []);

//setting a value to this, wil active the setter method.
accounting.mostRecentReport = "Year End Report";
accounting.addReport("something went wrong...");

//access as property, not as a function.
console.log(accounting.mostRecentReport);

accounting.addEmployee("Diego");
accounting.addEmployee("Orlando");

accounting.printReports();
accounting.printEmployeeInformation();
