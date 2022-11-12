import {useRef} from 'react'

export default function Counter() {

  console.log("Counter rendered")

  const count = useRef(0);
  // count is a object which has key current and its value 
  // variable made using count doesn't rerender on changing the value

  function handleClick(){
      count.current = count.current +1;
      alert("Click count: " + count.current)
  }

  return (
    <button onClick={handleClick}>Click Me</button>
  )
}

