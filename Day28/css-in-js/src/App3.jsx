import "./App.css";
import { css } from "@emotion/react";

const button = css`
  padding: 8px;
  color: white;
`;


const primary = css`
  background-color: royalblue;
`;

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
        css in js
    </div>
    <button css={button}>Primary</button>      
    </>
  );
}

export default App;
