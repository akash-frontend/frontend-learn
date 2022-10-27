const obj3 = {
    a:1,
    b:2,
    c:3,
};

const obj2 = {
    ...obj3,
    a:0,
};

console.log(obj2.a,obj2.b);
// 0 2














function printA() {
    console.log(answer);
    var answer = 1;
};
printA();
printA();
// undefined
// undefined






let animals = ["jaguar","eagle"];

animals.shift();

console.log(animals[0]);
// eagle

// The shift() method removes the first element from an array and returns that removed element. 






console.log(typeof answer);
// undefined
console.log(answer);
// refrence error 
















(() => {
    let x, y;
    try {
      throw new Error();
    } catch (x) {
      (x = 1), (y = 2);
      console.log(x);
    }
    console.log(x);
    console.log(y);
  })();


  //   1 undefined 2










  const a = {};
const b = { key: 'b' };
const c = { key: 'c' };

a[b] = 123;   
a[c] = 456;

console.log(a[b]);

// 456







const a = {}
const c = {}


a[c] = 123;

// we can't use object as key inside object 
// so to handle this javascript stringify c object
// (make it '[object Object]' and of type string)
// then assign it as key

 
console.log(Object.keys(a)) // [ '[object Object]' ]

// a = {
//   '[object Object]':123
// }

// or c becomes '[object Object]' inside a 


console.log(a[c]);  // 123
console.log(a['[object Object]']);  //123
console.log(c.toString()); //[object Object]
console.log(a[c.toString()]); //123

a[{}]=34

console.log(a[c]); //34
console.log(a['[object Object]']);  //34












console.log(typeof c) // object
console.log(typeof JSON.stringify(c)) //string












const a = {}
var c = {}

c = JSON.stringify(c)

a[c] = 123;
a[{}]=456


console.log(a[c]); //123



















let rainForests = ["Amazon","Borneo","Congo"];
rainForests.splice(0,2);
// from index 0, remove 2 elements 
console.log(rainForests);
// ['Congo']


// .splice(startindex, no of elements deleted from startindex, element to be replaced at deleted position) 
// If no of elements deleted from startindex is 0
// Then no delete but insert element
















const myFunc = ({x,y,z}) => {
    console.log(x,y,z)
}

myFunc(8,9,0)

// undefined undefined undefined




var apple = true + true *3
console.log(apple);
// 4