// ES6 introduced classes to JS
// Classes are just syntatical sugar for consturctor functions and closures
class Player{

    static playerCount = 0; // static variables are variables that do not belong to the created objects
    // they are refernced directly from the class and are shared by all
    
    // classes have specific constructor function called constructor
    constructor(fname, lname, jersey){
        this.firstName = fname;
        this.lastName = lname;
        this.jerseyNumber = jersey;
        Player.playerCount++;
    }

    // methods
    describeSelf(){
        console.log("Hello my name is " + this.firstName)
    }

}

const tebow = new Player("Tim", "Tebow", 15);
tebow.describeSelf()
const smith = new Player("Emmet", "Smith", 30);
smith.describeSelf()
console.log(Player.playerCount)