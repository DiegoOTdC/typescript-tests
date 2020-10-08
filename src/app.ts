//classes start with upper case
class Department {
  name: string;

  //method is called on creation, takes a string in this case that we assign to name property.
  constructor(n: string) {
    this.name = n;
  }
}

//create the Department object, passing it a string. store in const
const accounting = new Department("Diego");

console.log(accounting);
