import React, { useState } from 'react'

const App = () => {
  const [count,setcount]=useState(0);

  const increment=()=>{
    setcount(count+1);
  }

  const dicrement=()=>{
    setcount(count-1);
  }

  const reset=()=>{
    setcount(0);
  }
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={dicrement}>Dicrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default App