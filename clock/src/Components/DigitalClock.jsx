import React, { useEffect, useState } from 'react'
import './Digital.css'
function DigitalClock() {
    
    const [time,setTime] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval (() => {
            setTime(new Date())
        },1000);

        return () => {
            clearInterval(intervalId)
        }
    },[])

    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "long"
    }
    const dateString = time.toLocaleDateString("en-Us", options)
  return (
    <div className="container">
    <div className='digitalclock'>
        <h1>Digital Clock</h1>
      <h2>{time.toLocaleTimeString()}</h2>
      <p>{dateString}</p>
    </div>
    </div>
  )
}

export default DigitalClock;
