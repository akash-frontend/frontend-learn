import { Component, useState } from "react";
import "./App.css";
import CounterReducer from "./CounterReducer";

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


function AppLevelFallbackComponent({ error }) {
  return (
    <div>
      <p>App level</p>
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
    <ErrorBoundary FallbackComponent={AppLevelFallbackComponent}>
      <div className="App">
          <Breaker />
        <AnotherComponent />
      </div>
    </ErrorBoundary>
  );
}

export default App;


// Fall back component
// Npm Package for error boundary
// https://www.npmjs.com/package/react-error-boundary