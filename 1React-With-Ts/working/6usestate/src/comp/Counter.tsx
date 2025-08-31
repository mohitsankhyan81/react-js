import { useState } from "react"

const Counter = () => {
  const [counter,setcounter]=useState(0);
  return (
    <div>
      <h1>Count hear :-</h1>
      <p>Count: {counter}</p>
      <button onClick={()=>setcounter(num=>num+1)}>Increment</button>
      <button onClick={()=>setcounter(num=>num-1)}>Dicrement</button>
    </div>
  )
}

export default Counter