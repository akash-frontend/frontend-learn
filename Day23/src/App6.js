import './App.css';
import { useState } from "react";


function App() {
  let localVariable = "abc";
  const [text, setText] = useState("devsnest");
  // we use {localVariable} instead of simple localVariable
  // just for display purpose it shows it as an object 
  console.log("initial value of local variable",{ localVariable })
  console.log("initial value of text",{ text })
  console.log("app component rendered");

  const handleChange = (event) => {
    localVariable = event.target.value;
    setText(event.target.value)
    console.log({ localVariable })
  }
  return (
    <div className="App">
    <input type="text" name="content" id="content" onChange={handleChange} />
      {text}
    </div>
  );
}

export default App;


// on rerender the component state variable remembers its last updated value
// but local varible does not remember its last updated value 
