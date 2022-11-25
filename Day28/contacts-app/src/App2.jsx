import "./App.css";
import { css } from "@emotion/react";
import { Outlet } from "react-router-dom";


function Contents() {
  return (
    <section>
      <Outlet />
    </section>
  );
}

export function Layout() {
  return (
    <>
      <main
        css={css`
          display: grid;
          grid-template-columns: minmax(250px, 25%) 1fr;
          height: 100%;
        `}
      >
        <Contents />
      </main>
    </>
  );
}
