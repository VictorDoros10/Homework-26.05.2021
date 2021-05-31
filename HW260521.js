//this
let smartphone = {
    model: "Iphone 11",
    ram: "4GB",
    camera: "12 MP",
    batery: "Li-Ion 3110 mAh",
    fullInfo : function(standBy, musicPlay){
        return this.model + " is one of the most famous smartphones in the world, with a " + this.ram + " memory of RAM; camera of " + this.camera + " which will help you make the best shots ever." 
        + "The batery is " + this.batery + ", up to " + standBy + "h in stand-by (multimedia) and up to " + musicPlay + "h in music play."
    }
};

console.log(smartphone.fullInfo(17, 65))
console.log("-------------------------------------------------------------");


//For...in loop
let result = "";
let hotel = {
    name:"Marvel",
    location:"Sunny Beach",
    stars: "5 stars",
};
let x;
for (x in hotel){
    result += hotel[x] + " | ";
}
let final = JSON.stringify(result);
console.log(final);
console.log("-------------------------------------------------------------");

//Getter & Setter & Constructor
class Name {
constructor (fname, lname){
    this.firstName = fname;
    this.lastName = lname;
}
get getter(){
    return this.firstName + " " + this.lastName;
}
set setter(changeName){
    this.firstName = changeName;
}
}

let myName = new Name ("Andrei", "Caraman");
myName.firstName = "Anatolie";

console.log(myName.getter);
console.log("-------------------------------------------------------------");

//Constructor1
function Mother(fname, lname, age, occupation){
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.occupation = occupation;
    this.fullName = function(){
        return this.fname + " " + this.lname;
    }
    this.newOccupation = function(prof){
        this.occupation = prof;
    }
}

let myMother = new Mother("Natalia", "Doroș", 53, "Doctor");
myMother.newOccupation("Cook");

console.log(`My mother's name is ${myMother.fullName()}. 
She is ${myMother.age} years old.
${myMother.fname} is a ${myMother.occupation}.`);

//Constructor2
function Victor(fname, lname, salary){
    this.firstname = fname;
    this.lastname = lname;
    this.salariu = salary;

    this.fullname = function(age){
        return "My name is " + this.firstname + " " + this.lastname + ". I am " + age + " years old." 
        + "My monthly salary is " + this.salariu + "€.";
    }
    this.newsalary = function(sal){
        this.salariu = sal;
    }
}

let myVictor = new Victor("Victor", "Doroș", 1000);
myVictor.newsalary(4000);

console.log(myVictor.fullname(26));

