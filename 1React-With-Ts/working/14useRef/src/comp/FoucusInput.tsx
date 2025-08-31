import { useRef } from "react"
const FoucusInput = () => {
  const inputref=useRef<HTMLInputElement>(null);

  const focusMe=()=>{
    inputref.current?.focus();
  }
  return (
    <div>
      <input type="text" ref={inputref} placeholder="Click Button to focus me" />
      <button onClick={focusMe}>Focus</button>
    </div>
  )
}

export default FoucusInput