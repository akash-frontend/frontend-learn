import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);
    // const handleClick = () => {
    //     setCount(count + 1); // 0 + 1 => 1
    //     setCount(count + 1); // 0 + 1 => 1
    //     setCount(count + 1); // 0 + 1 => 1
    //     setCount(count + 1); // 0 + 1 => 1
    // }

     // updater func
     const handleClick = () => {
        setCount((prevCount) => prevCount + 1); // 0 + 1 => 1
        setCount((prevCount) => prevCount + 1); // 1 + 1 => 2
        setCount((prevCount) => prevCount + 1); // 2 + 1 => 3
        setCount((prevCount) => prevCount + 1); // 3 + 1 => 4
    }

    return (
        <div>
            <button onClick={handleClick}>Count: {count}</button>
        </div>
    )
}

export default Counter;

