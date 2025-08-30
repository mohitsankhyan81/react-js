import { useState } from "react"

interface todo{
  id:number;
  task:string;
  completed:boolean;
}

const Todolist = () => {
  const [todos,settodos]=useState<todo[]>([]);

  const Addtodos=(task:string)=>{
    const newtodo:todo={
      id:todos.length+1,
      task,
      completed:false,
    }
    settodos(prevTodo=>[...prevTodo,newtodo]);
  }
  return (
    <div>
      <h2>Todo list</h2>
      <button onClick={()=>Addtodos('new Todo')}>Add Todo</button>

      <ul>
        {todos.map(todo=>(
          <li key={todo.id}>{todo.task} {todo.completed?'(Completed)':''}</li>
        ))}

      </ul>
    </div>
  )
}

export default Todolist