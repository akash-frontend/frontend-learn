import React, { useEffect } from 'react'

function UseEffectExample() {
      
    useEffect(() => {
        // The AbortController interface represents a controller object that 
        // allows you to abort one or more Web requests as and when desired.
        const controller = new AbortController();
        const signal = controller.signal
        fetch("https://fakestoreapi.com/products/categories",{signal:signal})
        .then((res)=>res.json())
        .then(data => {
            console.log(data);
        })

        // clean up function 
        return () => {
           controller.abort()
          };
    },[])
    return (
        <div></div>
    )
}

export default UseEffectExample