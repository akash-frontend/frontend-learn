import { useState } from "react";
import "./App.css";

function Breaker() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount((prev) => {
      if (prev > 2) {
        throw new Error("Boom 💥");
      }
      return prev + 1;
    });
  }
  return <button onClick={handleClick}>{count}</button>;
}

function AnotherComponent() {
  return <h1>Component for displaying some other info</h1>;
}

function App() {
  return (
    <div className="App">
      <Breaker />
      <AnotherComponent /> 
    </div>
  );
}

export default App;


// Error is there in Breaker component 
// but it also does not show AnotherComponent because of this error 