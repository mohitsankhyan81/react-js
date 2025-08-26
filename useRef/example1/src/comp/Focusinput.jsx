import {  useRef } from "react"

const Focusinput = () => {
  const inputref=useRef(null);
  const focusinput=()=>{
    if(inputref.current){
      inputref.current.focus();
    }
  }
  return (
    <div>
      <input type="text" ref={inputref}  placeholder="Click on button to focus"/>
      <button onClick={focusinput}>Focus Input</button>
    </div>
  )
}

export default Focusinput