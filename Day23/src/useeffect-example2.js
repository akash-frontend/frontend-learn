import React, { useEffect, useState } from 'react'

function UseEffectExample() {
  


    const [show, setShow] = useState("false");

    useEffect(() => {
        let timer = setTimeout(() => setShow("true"), 3000);
        // This will create a timeout in memory, so it would be best to clean this up.

        // clean up function 
        return () => {
            clearTimeout(timer);
          };
    },[])
    return (
        <div>{show}</div>
    )
}

export default UseEffectExample