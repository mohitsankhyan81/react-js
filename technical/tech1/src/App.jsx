import { useState } from "react"

const App = () => {
  // const counter=useState("my name is mohit");
  // console.log(counter);
  
  const [count,setCount]=useState(0);

  const increment=()=>setCount(count+1)
  const dicrement=()=>setCount(count-1)
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={dicrement}>-</button>
    </div>
  )
}

export default App