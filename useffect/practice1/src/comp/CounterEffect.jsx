import {useState,useEffect} from "react";
const CounterEffect = () => {
  const [value,setvalue]=useState(0)

  useEffect(()=>{
    document.title=`count: ${value}`
  },[value])
  return (
    <div>
      <h1>Count:{value}</h1>
      <button onClick={()=>setvalue(value+1)}>Click Me</button>
    </div>
  )
}

export default CounterEffect