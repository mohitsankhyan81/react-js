import { useState } from "react"

const Todolist = () => {

  const [todo,settodo]=useState([]);
  const [inputValue,setinputValue]=useState("");
  return (
    <div>
      <h1>todo list</h1>;
      <form onSubmit={handleChanges}>
        <input type="text" value={inputValue} placeholder="add a new todo" />
        <button type="submit"> To Submit</button>
      </form>
    </div>
  )
}

export default Todolist