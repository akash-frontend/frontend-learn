import React from "react";
import { useContext } from "react";
import { createContext } from "react";

const UserContext = createContext(null);
function Foo({ user }) {
  return (
    <>
      <h1>this is foo</h1>
      <Bar user={user} />
    </>
  );
}

function Bar({ user }) {
  return (
    <>
      <UserContext.Provider value={"joe"}>
        <h2>this is bar</h2>
        <Baz user={user} />
      </UserContext.Provider>
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
          <Foo user={username} />
      </UserContext.Provider>
    </div>
  );
}


// Nearest context provider gets value
