import { useRef } from "react"

const FoucusInput = () => {
  const inputref=useRef<HTMLInputElement>(null);

  const handlefocus=()=>{
    inputref.current!.focus();
  }
  return (
    <div>
      <input type="text" placeholder="Click on button to focus" ref={inputref}/>

      <button onClick={handlefocus}>Focus</button>
    </div>
  )
}

export default FoucusInput