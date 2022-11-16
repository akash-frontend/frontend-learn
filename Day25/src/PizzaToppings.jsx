import React, { useEffect, useState } from "react";

const pizzaToppings = [
  {
    id: "z",
    topping: "onion",
  },
  {
    id: "x",
    topping: "margherita",
  },
  {
    id: "c",
    topping: "jalapeno",
  },
  {
    id: "v",
    topping: "pineapple",
  },
];
// export default function PizzaToppings() {
//   const [toppings, setToppings] = useState(pizzaToppings);
//   function removeTopping(topping) {
//     setToppings(toppings.filter((i) => i !== topping));
//   }
//   return (
//     <ul>
//       {toppings.map((item, index) => (
//         <li key={item.id}>
//           <label htmlFor={item.topping}>{item.topping}</label>
//           <input type="text" name={item.topping} id={item.id} defaultValue={item.topping} />
//           <button onClick={() => removeTopping(item)}>X</button>
//         </li>
//       ))}
//     </ul>
//   );
// }



// key
// To keep track of elements which was rendered

// Without key 
// on delete input remains there and shifted to next item
// so different input and label  


// defaultValue only gets set on initial load. After that, it won't get "naturally" 
// updated because the intent was only to set an initial default value.
// so it set default value for each input initially 
// on delete 
// default value search if there is any unique (key) to maintain 
// default value for each input
// if not key default value shift to next input and override its default key
// so we can say default value not update properly on state change 

// but if we use value it works fine
// we should use key in this also
// because if we use it only remove that part 
// which we delete from UI 
// not rerender entire list after deleting one part



function shuffle(originalArray) {
  const shuffledArray = [...originalArray];

  // const shuffledArray = originalArray;
  // it will not renrender componenent 
  // https://stackoverflow.com/questions/68106950/react-renders-when-changing-state-using-spread-operator-but-not-when-passing-th
    
  // index = 3(initially)
  // Math.floor(Math.random() * (index + 1)) // random no b/w 0 and index+1 
  // if index 3 in above it gives 0/1/2/3

  for (let index = shuffledArray.length - 1; index > 0; index--) {
    let randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffledArray[index], shuffledArray[randomIndex]] = [shuffledArray[randomIndex], shuffledArray[index]];
  // [3 0] = [0 3] swap
  // 2 1 = 1 2 
  // 1 3 = 3 1
  }
  return shuffledArray;
}

export default function PizzaToppings() {
  const [toppings, setToppings] = useState(pizzaToppings);
  function removeTopping(topping) {
    setToppings(toppings.filter((i) => i !== topping));
  }
  useEffect(() => {
    const interval = setInterval(() => {
      setToppings(shuffle(toppings));
    }, 2000);

    return () => clearInterval(interval);
  });
  return (
    <ul>
      {toppings.map((item, index) => (
        <li key={item.id}>
          <input type="text" value={item.topping} />
        </li>
      ))}
    </ul>
  );
}
