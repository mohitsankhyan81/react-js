import { useState,useEffect,useRef } from "react"

const Timer = () => {
  const [count,setcount]=useState(0);
  const intervalref=useRef(null);

  useEffect(()=>{
    intervalref.current=setInterval(()=>{
      setcount(prevCount=>prevCount+1);
    },1000);

    return ()=>{
      clearInterval(intervalref.current);
    }
  },[])
  return (
    <div>
      <h1>Timer: {count} seconds</h1>
      <button onClick={()=>clearInterval(intervalref.current)}>Stop Timer</button>
    </div>
  )
}

export default Timer