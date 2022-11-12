import {useRef} from 'react'

export default function Counter() {

  console.log("Counter rendered")

  const ref = useRef(null);

  function handleClick(){
      ref.current.focus()
  }

  return (
    <>
    <input type="text" ref={ref}/>
    <button onClick={handleClick}>Click Me</button>
    </>
  )
}




// how update UI in case of useRef if no rerender?
// Actually React make changes in Virtual DOM and then change in real dom 
// useRef functionality store refrence of object (this refrence is handled by browser itself)
// and directly update real dom 
// so no rerender needed 