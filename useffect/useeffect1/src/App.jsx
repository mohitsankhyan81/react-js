import { useState,useEffect } from "react"

const App = () => {
  const [value,setvalue]=useState(0);
  useEffect(()=>{
    console.log("user Effect");
    document.title=`increment ${value}`
  },[value])
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={()=>(setvalue(value+1))}>Click Me</button>
    </div>
  )
}

export default App