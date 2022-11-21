import React from "react";
import { useReducer } from "react";

function reducer(state, action) {
  if (action === "increase") {
      return state + 1;
  } else if (action === "decrease") {
      return state - 1;
  }
  return null; 
}


export default function CounterReducer() {
  const [count, dispatch] = useReducer(reducer, 0);
  function increaseCounter() {
    dispatch("increase");
  }
  function decreaseCounter() {
    dispatch("decrease");
  }
  return (
    <>
      <button onClick={increaseCounter}>+</button>
      {count}
      <button onClick={decreaseCounter}>-</button>
    </>
  );
}


// useReducer hook 
// consolidate all the state update logic outside your component in a single function, called a reducer


// useReducer(reducer function, function or value)
// function responsible for calculating initial value


// Instead of directly modifying state on any event like button click 
// reducers Dispatch or trigger actions which modified state
// like with usestate onclick update setState(count+1)
// but with reducers onclick dispatch update action 
// then on reducer function you define logic for update action state+1

// Action dispatch
// Reducer function called