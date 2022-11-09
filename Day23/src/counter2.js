import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(count + 1); // 0 + 1 => 1
        setCount(count + 1); // 0 + 1 => 1
        setCount(count + 1); // 0 + 1 => 1
        setCount(count + 1); // 0 + 1 => 1
    }

    return (
        <div>
            <button onClick={handleClick}>Count: {count}</button>
            {/* <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button> */}
        </div>
    )
}

export default Counter;



// The setState() method does not immediately update the state of the component, 
// it just puts the update in a queue to be processed later. 
// React  batch multiple update requests together to make rendering more efficient