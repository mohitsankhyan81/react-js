import { useState } from "react"


interface info{
  id:number;
  task:string;
  completed:boolean;
}
const Todolist = () => {
  const [todo,settodo]=useState<info[]>([]);

  const addtodos=(task:string)=>{
    const newtodo:info={
      id:todo.length+1,
      task,
      completed:false
    }
    settodo(prev=>[...prev,newtodo]);
  }
  return (
    <div>
      <h1>
        Toto list
      </h1>
      <button onClick={()=>addtodos('clicked')}>Click</button>

      <ul>
        {todo.map(todo=>(
          <li key={todo.id}>{todo.task}{todo.completed?('completed'):''}</li>
        ))}
      </ul>
    </div>
  )
}

export default Todolist