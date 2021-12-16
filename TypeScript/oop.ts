
class Employee{

    // the default access modifer IS public so lines 5 and 6 are the same
    public fname: string
    lname: string 
    private age: number // cannot be access outside of the class
    department: string 

    constructor(fname: string, lname: string, age: number, department?: string){
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.department = department;
    }

}

const adam: Employee = new Employee("Adam", "Ranieri", 19, "Training");
const bill: Employee = new Employee("Bill", "Smith", 45);

// TS has a convient shorthand syntax for create classes
class Player{
    constructor(
        public fname:string, 
        public lname:string, 
        public jersey:number , 
        private age:number = 0
        ){}
}

const tebow: Player = new Player("Tim", "Tebow", 15,40);

class QuarterBack extends Player{

    throwBall(){
        console.log("Throws the ball")
    }
}

const trask: QuarterBack = new QuarterBack('Kyle', "trask", 14, 24);
trask.throwBall()