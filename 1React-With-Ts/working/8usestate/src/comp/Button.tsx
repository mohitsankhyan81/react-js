import { useState } from "react"

const Button = () => {
  const [count,setcount]=useState(0);
  return (
    <div>
      <h1>Count is like :-</h1>
      <p>Count: {count}</p>
      <button onClick={()=>setcount(count+1)}>Increment</button>
      <button onClick={()=>setcount(count-1)}>Dicrement</button>
    </div>
  )
}

export default Button