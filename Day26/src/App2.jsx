import { Component, useState } from "react";
import "./App.css";

class ErrorBoundary extends Component {
  state = { error: null };
  static getDerivedStateFromError(error) {
    return { error };
  }
  // componentDidCatch(error) {
  //   console.log(error);
  // }

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
   
      <div className="App">
        <ErrorBoundary>
          <Breaker />
        </ErrorBoundary>
        <AnotherComponent />
      </div>
  );
}

export default App;


// Only the part which is breaking is handle
// Rest of the part is working
// Gracefully handle error within components
// For that purpose we have error boundary

// To create error boundary 
// We need class based components







// this.props.children here is Breaker

// The <pre> HTML element represents preformatted
// text which is to be presented exactly as written in the HTML file
// if add whitespace in html it also shows on UI in pre tag 