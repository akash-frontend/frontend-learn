import './App.css';
import { useState } from "react";


function App() {
  const [text, setText] = useState("devsnest");


  console.log("app component rendered");

  const handleChange = (event) => {
    setText(event.target.value)
    // triggers a rerender 
    // it updates the state variable
  }
  return (
    <div className="App">
    <input type="text" name="content" id="content" onChange={handleChange} />
      {text}
    </div>
  );
}

export default App;
