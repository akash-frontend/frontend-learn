import React from "react";

function Foo({user}) {
  return (
    <>
      <h1>this is foo</h1>
      <Bar user={user}/>
    </>
  );
}

function Bar({user}) {
  return (
    <>
        <h2>this is bar</h2>
        <Baz user={user}/>
    </>
  );
}

function Baz({user}) {
  return (
    <h3>this is baz, wazzup {user}</h3>
  );
}

export default function ContextEx() {
  const username = "gaurav";
  return (
    <div>
      Parent app say Hello {username}
      <Foo user={username} />
    </div>
  );
}



// we want to display username in Baz component 
// so need to pass component in Foo and Bar component to pass down props 

// This is how we were able to pass this username coming from
// topmost parent ContextEx to all the way down to the innermost child Baz 

// Foo and Bar actually need this user property not using it 
// but because child component nested inside these component needs it 
// we have to unnecessarily pass the prop down from parent to child element 
// even though they are not being used 

// like in 50 compomnents 
// information topmost 
// 49th component need it 
// so pass the props is not suitable 

// Prop Drilling
// pass props to components which actually doesn't need it 
// but we pass it just to pass it down to nested component

// Using usecontext we can solve this problem