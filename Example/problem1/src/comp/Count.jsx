import { useState } from "react"

const Count = () => {

  const [count,setCount]=useState(0);


  return (
    <div>
      <h1>you click {count} times</h1>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <button onClick={()=>setCount(count-1)}>Dicrement</button>
    </div>
  )
}

export default Count
