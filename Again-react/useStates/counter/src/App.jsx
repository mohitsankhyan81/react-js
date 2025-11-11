import React, { useState } from 'react'

const App = () => {

  const [count,setcount]=useState(0);
  const increment=()=>{
    setcount(count+1);
  }

  const dicrement=()=>{
    setcount(count-1);
  }
  return (
    <div>
      <h1>count: {count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={dicrement}>-</button>
    </div>
  )
}

export default App