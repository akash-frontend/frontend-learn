import './App.css';
import { useState } from "react";


function App() {

  const state = useState("devsnest");
  console.log(state);

  console.log("app component rendered");

  return (
    <div className="App">
    </div>
  );
}

export default App;


// To use states we need hooks in react
// we will make a state using useState hooks
// we need to pass an initial value
// and it will return state(variable) and a 
// function that can update the value of state 