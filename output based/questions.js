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







function printA() {
    console.log(answer);
    var answer = 1;
};
printA();
printA();





const myFunc = ({x,y,z}) => {
    console.log(x,y,z)
}

myFunc(8,9,0)





let animals = ["jaguar","eagle"];

animals.shift();

console.log(animals[0]);




console.log(typeof answer);
console.log(answer);



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



  







  const a = {};
  const b = { key: 'b' };
  const c = { key: 'c' };
  
  a[b] = 123;
  a[c] = 456;
  
  console.log(a[b]);









  
let rainForests = ["Amazon","Borneo","Congo"];
rainForests.splice(0,2);
console.log(rainForests);





var apple = true + true *3
console.log(apple);


