import { useState } from "react"

const App = () => {
  const [input,setinput]=useState("");
  const [todo,settodo]=useState([]);

  const addtodolist=()=>{
    const item={
      id:todo.lenth+1,
      text:input,
      completed:false
    }
    
    settodo(prev=>[...prev,item]);
    setinput("");
  }
  
  return (
    <div>
      <input type="text" placeholder="enter todo" value={input} onChange={(e)=>setinput(e.target.value)}/>
      <button onClick={()=>addtodolist()}>Add</button>

      <ul>
        {todo.map(t=>(
          <li key={t.id}>
          <span>{t.text}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App