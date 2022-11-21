import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
    </Routes>
  );
}


function Dashboard() {
  return <h1>this is dashboard</h1>;
}

function About() {
  return <h1>This is about</h1>;
}
function Home() {
  return <h1>This is home</h1>;
}
export default App;


// single page application
// each route is associated with specific component
// we are not going into the server of getting http request for 
// different routes 
// benefit - no page refresh on changing route, page loads faster


