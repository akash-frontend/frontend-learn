// 1. Object.create()

// When we create a new object using object.create method,  
// it creates a new empty object but sets that object's prototype 
// to be whatever object we pass into the method

let Student = {
    name:"Akash",
    age:24,
    display(){
        console.log("Name:",this.name);
    }
};

let std1 = Object.create(Student);

// std1 is an empty object but std1's prototype is the Student object 

console.log(std1);
// {}

console.log(Object.getPrototypeOf(std1));
// {name: 'Akash', age: 24, display: ƒ}

std1.display();
// Name: Akash



// 2. Object.keys() and Object.values()

// Object.keys() creates an array containing the keys of an object. 
// Object.values() creates an array containing the values of an object.

let Employee = {
    name:"Akash",
    age:24,
    role:"frontend developer"
};

console.log(Object.keys(Employee));
// ['name', 'age', 'role']

console.log(Object.values(Employee));
//  ['Akash', 24, 'frontend developer']



// 3. Object.entries() & Object.fromEntries()

// Object.entries() creates a nested array of the key/value pairs of an object. 
// Object.fromEntries() does the exact opposite of Object.entries(). 
// It takes an array of key value pairs and convert them into single object. 

let newEmployee = {
    name:"Akash",
    age:24,
    role:"frontend developer"
};

let EmployeeArray = [ ["name","Akash"],["age",24],["role","frontend developer"]]

console.log(Object.entries(newEmployee));
// (3) [Array(2), Array(2), Array(2)]0: Array(2)]
// 0: (2) ['name', 'Akash']
// 1: (2) ['age', 24]
// 2: (2) ['role', 'frontend developer']


console.log(Object.fromEntries(EmployeeArray));
// {name: 'Akash', age: 24, role: 'frontend developer'}



// 4. Object.seal() & Object.freeze()

// Both Object.freeze() and Object.seal() prevents a Javascript object from 
// being altered. 
// Once if it has been frozen or sealed:
// You can't add new properties.
// You can't remove existing properties

// Differences:
// Object.seal() marks existing properties as non configurable, which means 
// their values can be changed as long as they are writable 

const frozen = Object.freeze({username: 'Rohan'});
const sealed = Object.seal({username: 'Rohan'});

console.log(frozen);
// {username: 'Rohan'}
console.log(sealed);
// {username: 'Rohan'}

//Adding new property
frozen.name = 'Akash';
sealed.name = 'Akash';

console.log(frozen);
// {username: 'Rohan'}
console.log(sealed);
// {username: 'Rohan'}

//removing an existing one
delete frozen.username;
delete sealed.username;

console.log(frozen);
// {username: 'Rohan'}
console.log(sealed);
// {username: 'Rohan'}

//updating the existing one
frozen.username = 'Akash';
sealed.username = 'Akash';

console.log(frozen);
// {username: 'Rohan'}
console.log(sealed);
// {username: 'Akash'}



// Object.assign()

// assign() which is used to copy the values and properties from 
// one or more source objects to a target object.


let originalVal = {
    name:'Akash',
    age:24,
    addressObj:{
        address:'Original Address'
    }
};

let copiedVal = Object.assign({},originalVal);

console.log(copiedVal);
// {name: 'John', age: 24, addressObj: {address: 'New Address'}}



const obj1 = {
    name:"Akash"
}

const obj2 = {
    lastname:"jain"
}

let targetObject = {
    prop1: 100,
    prop3: 3,
  };
  
  let finalObject = Object.assign(targetObject, obj1, obj2);

  console.log(finalObject);
//   {prop1: 100, prop3: 3, name: 'Akash', lastname: 'jain'}






// this

var hero = {
    powerLevel: 99,
        getPower(){
        return this.powerLevel;
        }
    }
    
    
let getPower = hero.getPower;
console.log(getPower)  // [Function: getPower]
console.log(getPower()) //undefined
console.log(hero.getPower()); // 99

