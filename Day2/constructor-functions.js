
// Constructor Function
// want to create the same object over and over
// by convention constructor functions start with a capital
function Employee(fname, lname, department){
    this.fname = fname;
    this.lname = lname;
    this.department = department;
    this.mi = "C"; // this is essentially like the __init__ self.name in python
}

const adam = new Employee("Adam", "Ranieri", "Training");
const steve = new Employee("Steve", "Kelsey", "Management");
console.log(adam)
console.log(steve)