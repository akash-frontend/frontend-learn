import './App.css';

function App() {
  console.log("app component rendered");
  let text = "devsnest"

  const handleChange = (event) => {
    text = event.target.value;
    console.log("updated value of text",text);
  }
  return (
    <div className="App">
    <input type="text" name="content" id="content" onChange={handleChange} />
      {text}
    </div>
  );
}

export default App;



// Make a variable text
// using input onchange apply function handleChange
// which display updated text on console
// but you see our {text} on page not changing
// because variable does not render the page with updated value
// if we want that our variable also change we need to use
// variables as state