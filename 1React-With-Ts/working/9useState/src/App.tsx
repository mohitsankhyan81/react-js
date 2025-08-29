import { useState } from "react"
import Userprofile from './comp/Userprofile'
const App = () => {

   const [count,setcount]= useState<number>(0);

   const increment=()=>{
    setcount((count)=>count+1)
   }
  return (

    <div>
      <h1>Count is :-</h1>
      <p>count: {count}</p>
      <button onClick={increment}>Increment</button>

      <Userprofile/>
    </div>
  )
}

export default App