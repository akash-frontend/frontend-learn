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
        <section
          css={css`
            display: grid;
            grid-template-rows: auto 200px;
          `}
        >
          <h1>this is a section</h1>
          <p>this is a para</p>
        </section>
      </div>
      <div>
        <a css={primary} href="">
          This is a link
        </a>
      </div>
    </>
  );
}

export default App;
