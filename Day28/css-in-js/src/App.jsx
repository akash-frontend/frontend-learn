import "./App.css";
import { css } from "@emotion/react";


function App() {

  return (
    <>
    <div 
      css={css({
          backgroundColor: "lightgray",
          color: "white",
        })}
        >
        css in js using emotion
    </div>
      
    </>
  );
}

export default App;


// Use css in javascript
// Use emotion library
// It will generate class for that element
// And that class has all this properties


// So everything at 1 place in the component itself
// So logic html and css at 1 place
// Like html we add using jsx
// Css using these libraries 
// It uses sass kind of styling

// Need Bable plugin 
// As browser doesn't understand css in jsx
// So it convert that css with normal css