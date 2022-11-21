import { Component, useState } from "react";
import "./App.css";

class ErrorBoundary extends Component {
  state = { error: null };
  static getDerivedStateFromError(error) {
    return { error };
  }
  render() {
    const { error } = this.state;
    if (error) { 
      return (
        <div>
            <pre>{error.message}</pre>
        </div>
      )      
    }
    return this.props.children;
  }
}


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
    <ErrorBoundary>
      <div className="App">
        <ErrorBoundary>
          <Breaker />
        </ErrorBoundary>
        <AnotherComponent />
      </div>
      </ErrorBoundary>
  );
}

export default App;


// ErrorBoundary applies which is closest to the component 