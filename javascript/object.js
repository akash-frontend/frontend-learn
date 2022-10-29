// object literal syntax
let person = {
    firstName: "akash",
    lastName: "jain"
}

// using the object
let newPersonForOrg = new Object();
newPersonForOrg.firstName = "John";
newPersonForOrg.lastName = "Doe"
console.log(newPersonForOrg)

// function constructor

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

let jane = new Person("Jane", "Doe");
console.log(jane)

let gaurav = new Person("Gaurav", "Sen");
console.log(gaurav)

Person.prototype.printName = function () {
    return this.firstName + " " + this.lastName;
}
console.log(gaurav.firstName.toString());
console.log(jane.printName());



// ES6 Class syntax :

class Obj {
    constructor(key, value){
        this[key] = value;
    }
}

const myobject = new Obj('key', 'value');




// object key is always a string

const obj = {
    key: "value"
}

console.log(typeof Object.keys(object))  
// string


//Questions:



// Display all the keys of an object

for(let key in obj){
        console.log(key);
}




// Display all the values of an object
console.log(Object.values(obj));



// Create an empty object which has no prototype attached to it

const myobj = Object.create(null);



