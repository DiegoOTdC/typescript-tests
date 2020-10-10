class Department {
  //protected is like private, but also available in classes that extend this class. (inherited)
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {}

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
  constructor(id: string, public reports: string[]) {
    super(id, "Accounting");
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
  }

  printReports() {
    console.log(this.reports);
  }
}

const it = new ITDepartment("d1", ["Diego"]);

it.addEmployee("George");
it.addEmployee("Jose");

it.describe();
it.printEmployeeInformation();

console.log(it);

const accounting = new AccountingDepartment("d2", []);

accounting.addReport("something went wrong...");

accounting.addEmployee("Diego");
accounting.addEmployee("Orlando");

accounting.printReports();
accounting.printEmployeeInformation();
