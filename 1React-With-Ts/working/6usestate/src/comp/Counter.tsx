import { useState } from "react"

const Counter = () => {
  const [count,setcount]=useState<number>(0);
  return (
    <div>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={()=>setcount(count+1)}>Increment</button>
      <button onClick={()=>setcount(count-1)}>Dicrement</button>
    </div>
  )
}

export default Counter