import "./App.css";
import { css } from "@emotion/react";


function App() {

  return (
    <>
    <div 
      css={css({
          backgroundColor: "lightgray",
          color: "white",
          "&:hover": {
            backgroundColor: "royalblue",
            cursor: "pointer",
          },
        })}
        >
        css in js using emotion
    </div>
      
    </>
  );
}

export default App;
