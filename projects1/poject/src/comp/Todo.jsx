import { useState } from "react";
import "../style.css";

const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");

  const HandleSubmit = () => {
    setTodo((todo) => {
      return todo.concat({
        text: input,
        id: Date.now(),
      });
    });
    setInput("");
  };

  const removeTodo = (id) => {
    setTodo((todo) => todo.filter((t) => t.id !== id));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a new Todo list"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={HandleSubmit}>Submit</button>
      <ul>
        {todo.map(({ text, id }) => (
          <li key={id}>
            <span>{text}</span>
            <button onClick={() => removeTodo(id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
