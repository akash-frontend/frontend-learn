import './App.css';
import { useState } from "react";


function App() {

  const state = useState("devsnest");
  const text = state[0]
  const updateText = state[1]

  console.log("app component rendered");

  const handleChange = (event) => {
    updateText(event.target.value)
  }
  return (
    <div className="App">
    <input type="text" name="content" id="content" onChange={handleChange} />
      {text}
    </div>
  );
}

export default App;


// now text on page will also be updated 
// as we use a state