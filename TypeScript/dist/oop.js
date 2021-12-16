class Employee {
    constructor(fname, lname, age, department) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.department = department;
    }
}
const adam = new Employee("Adam", "Ranieri", 19, "Training");
const bill = new Employee("Bill", "Smith", 45);
// TS has a convient shorthand syntax for create classes
class Player {
    constructor(fname, lname, jersey, age = 0) {
        this.fname = fname;
        this.lname = lname;
        this.jersey = jersey;
        this.age = age;
    }
}

const tebow = new Player("Tim", "Tebow", 15, 40);
class QuarterBack extends Player {
    throwBall() {
        console.log("Throws the ball");
    }
}
const trask = new QuarterBack('Kyle', "trask", 14, 24);
trask.throwBall();
