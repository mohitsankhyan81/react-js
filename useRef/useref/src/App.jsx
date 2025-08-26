import { useRef } from "react"
const App = () => {
  const inputelement=useRef(null);
  console.log(inputelement);

  const focusInput=()=>{
    inputelement.current.focus()
     inputelement.current.value="Sankhyan"
  }
  return (
    <div>
      <input type="text" ref={inputelement} />
      <button onClick={()=>focusInput()}>focus & Write My name is mohit</button>
    </div>
  )
}

export default App