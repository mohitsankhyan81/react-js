import { useRef } from "react";

const Focus = () => {
  const inputref=useRef<HTMLInputElement>(null);
  const handleclick=()=>{
    inputref.current!.focus();
  }
  return (
    <div>
      <input type="text" placeholder="Focus on Submit" ref={inputref}/>
      <input type="submit" onClick={handleclick} />
    </div>
  )
}

export default Focus