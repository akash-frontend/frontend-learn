import React from "react";
import { useContext } from "react";
import { createContext } from "react";

const UserContext = createContext(null);
function Foo() {
  return (
    <>
      <h1>this is foo</h1>
      <Bar />
    </>
  );
}

function Bar() {
  return (
    <>
        <h2>this is bar</h2>
        <Baz />
    </>
  );
}

function Baz() {
  const username = useContext(UserContext);
  return (
    <h3>
      this is baz, wazzup {username}
    </h3>
  );
}

export default function ContextEx() {
  const username = "gaurav";
  return (
    <div>
      Parent app say Hello {username}
      <UserContext.Provider value={username}> 
          <Foo />
      </UserContext.Provider>
    </div>
  );
}
