import React from 'react'
import { useState, useRef } from 'react';

function StopWatch() {
  
  const startTime = useRef(null);
  const intervalRef = useRef(null);
  const [now, setNow] = useState(null);
  const [laps, setLaps] = useState([]);

  let secondsElapsed = 0;
  
  function startStopWatch() {
     startTime.current = Date.now();  
     intervalRef.current = setInterval(() => {
       setNow(Date.now());
     }, 10);   
  }

  function stopStopWatch(){
     clearInterval(intervalRef.current);
  }
  
  function trackLap() {
    setLaps([...laps, secondsElapsed]);
  }

  secondsElapsed = (now - startTime.current) /1000;

  return (
    <>
     <section>
          <h1>{secondsElapsed.toFixed(3)}</h1>
          <button onClick={startStopWatch}>Start</button>
          <button onClick={stopStopWatch}>Stop</button>
          <button onClick={trackLap}>Lap</button>
     </section>
     
     {laps?.length ? (<article>
        <h2>Laps</h2> 
         {laps.map(lap => <p key={lap}>{lap}</p>)}
     </article>): null }
     </>
  )
}

export default StopWatch