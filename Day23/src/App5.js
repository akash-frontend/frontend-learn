import './App.css';
import { useState } from "react";


function App() {
  const [text, setText] = useState("devsnest");

  console.log("app component rendered");

  const handleChange = (event) => {
    setText("noupdate")
  }
  return (
    <div className="App">
    <input type="text" name="content" id="content" onChange={handleChange} />
      {text}
    </div>
  );
}

export default App;


// behaviour of setState function in useState
// first it rerender component and then
// check provided value is same as previous or not
// if same no further rerender 