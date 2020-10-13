//built-in generics -> allow you to get additional type information.
//Array : Holds data with certain types
const names: Array<string> = []; //string[]
names[0].split(" "); //if no additional type info was added, you could have numbers in the array, which you can't use this method on.

//Promise : returns data with certain type
//this example doesn't give an error, since you use any. In run time you will receive an error, since you can't use that split() method on a number.
const promise: Promise<any> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 2000);
});

promise.then((data) => {
  data.split(" ");
});
