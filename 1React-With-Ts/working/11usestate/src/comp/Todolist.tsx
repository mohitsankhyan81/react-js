import { useState } from "react"

interface todo{
  id:number;
  task:string;
  completed:boolean;
}

const Todolist = () => {
  const [todes,settodes] = useState<todo[]>([]);


  const addtodos=(task:string)=>{
    const newtodo:todo={
      id:todes.length+1,
      task,
      completed:false
    }
    settodes(prev=>[...prev,newtodo]);
  }

  return (
    <div>
      <h1>TODO HEAR</h1>

      <button onClick={()=>addtodos('NEW TODO')}>ADD TODO</button>

      <ul>
        {todes.map(todo1=>(
          <li key={todo1.id}>{todo1.task}{todo1.completed?'Completed':''}</li>
        ))}
      </ul>
    </div>
  )
}

export default Todolist