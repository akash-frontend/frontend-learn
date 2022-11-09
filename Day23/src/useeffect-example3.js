import React, { useEffect } from 'react'

function UseEffectExample() {
  
    useEffect(() => {
        window.addEventListener("mousemove",()=>console.log("add mouseove"))

        // clean up function 
        return () => {
            window.removeEventListener("mousemove")
          };
    },[])
    return (
        <div></div>
    )
}

export default UseEffectExample