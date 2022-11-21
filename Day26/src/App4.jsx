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
      return <this.props.FallbackComponent error={error} />;
    }
    return this.props.children;
  }
}

function FallbackComponent({ error }) {
  return (
    <div>
      <p>Something went wrong</p>
      <pre>{error.message}</pre>
    </div>
  );
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
      <div className="App">
        <ErrorBoundary FallbackComponent={FallbackComponent}>
          <Breaker />
        </ErrorBoundary>
        <AnotherComponent />
      </div>
  );
}

export default App;



// We can provide a fallback component for our error boundary