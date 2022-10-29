
// array only contains properties like it's elements and length
// So how array access. map, forEach and reduce functions
// They don't exist on array itself, they exist on arrays prototype


const arr = [1,2,3]
console.log(arr)

const newArr = arr.map((num)=>num * 10)
console.log(newArr)

// Each object has private property which holds a link to another object that's called it's prototype. 
// That prototype object has prototype of it's own and so on until an object is reached 
// with null as it's prototype property and now if 
// any object is created from of taking a reference from the another object then that object that 
// created object is going to have all the properties that it's prototype has and 
// that's the prototypal inheritance


//  Prototypal inheritance means is that an object can point to 
// another object and inherit all its properties. 
// This allows multiple instances of an object to share common properties


function Person(first, last,age){
    this.first = first;
    this.last = last;
    this.age = age;
}

Person.prototype.getFullName = function() {
    return this.first + ' ' + this.last;
}

const p1 = new Person('Akash','Jain',24);

console.log(p1.getFullName());
// Akash Jain







const person = {
    alive:true
}

const musician = {
    plays:true
}

console.log(musician.alive);
// undefined

// Make person proto of musician
musician.__proto__ = person;

console.log(musician.plays);
// true

console.log(musician.alive);
// true 
// missing property => go to person


// JS now has getPrototypeOf and setPrototypeOf methods instead
// of using __proto__ 

Object.setPrototypeOf(musician,person);

console.log(Object.getPrototypeOf(musician));
// {alive: true} 









// How do you create an object with prototype?

const user = {
    name: 'Akash'
}

const anotherUser = Object.create(user);

console.log(anotherUser);
// {}
//     [[Prototype]]: Object
//         name: "Akash"

console.log(anotherUser.name);
// Akash





// Questions:

//Output

function giveMeOnePizza() {
    return 'Here is pizza';
}

const giveMeOneChoclate = () => "Here's choclate...";

console.log(giveMeOnePizza.prototype);
console.log(giveMeOneChoclate.prototype);

// {constructor: ƒ}
// undefined





