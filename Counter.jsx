import React, { useState } from 'react'

const Counter = () => {
    const[counter,setCounter] = useState(10)

    const increment = () =>{
        setCounter(counter+1)

    }
    const decrement = () =>{
        setCounter(counter-1)
    }
  return (
    <div>
        <h2>{counter}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  )
}

export default Counter
