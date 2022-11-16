import React, { useState, memo } from "react";

export default function MemoizedEx() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  console.log("parent rendered");
  return (
    <>
      <form action="">
        <fieldset>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            autoComplete="off"
            placeholder="enter first name"
          />
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            autoComplete="off"
            placeholder="enter last name"
          />
        </fieldset>
      </form>
      <Greeting name={firstName} />
    </>
  );
}

const Greeting = memo(({ name }) => {
  console.log("Greeting rendered", new Date().toString());
  return <h1>Hello {name}!</h1>;
});


// You do some calculation
// Remember result of that calculation
// That is known as memoization


// Value passed as prop to child component Greeting
// So child component also get rerendered when firstname changes
// Acceptable behavior

// But last name we didn't send prop to child component Greeting
// then also child component rerendered

// Make any change in parent component 
// Child component also gets rerendered
// irrespective state which changes is passed as prop to child component or not

// To handle this 
// We can use memo on child component to memoize the props
// if New properties of child is same as Old properties then no rerender 

// After memo 
// Last name no longer rerender child component
