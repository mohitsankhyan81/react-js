import { useState , useEffect} from "react"

const App = () => {

  const [data,setdata]=useState([]);
  useEffect(()=>{
    async function getData(){
      const resourse=await fetch("https://jsonplaceholder.typicode.com/todos");
      const data =await resourse.json();
     
      if(data && data.length)setdata(data);

    } 
    getData();
  },[]);

  return (
    <div>
      <ul>{data.map(todo=>{
       return  <li key={todo.id}>{todo.title}</li>
      })}</ul>
    </div>
  )
}

export default App