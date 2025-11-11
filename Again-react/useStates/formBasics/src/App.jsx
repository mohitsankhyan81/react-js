import React, { useState } from 'react'

const App = () => {
  const [title,settitel] = useState("");
  const [amount,setamount]=useState(0);
  const [list,setlist]=useState([]);

  const handleChange=(e)=>{
    e.preventDefault();
    if(!title||!amount)return;
    const newItem={id:Date.now,title,amount};
    setlist([...list,newItem]);
    settitel[""];
    setamount[""];
  }
  return (
    <div>
      <h1>Expence maangement monthly</h1>
      <form onSubmit={handleChange}>
        <input
         type="text" 
         placeholder='title name'
         value={title}
         onChange={e=>settitel(e.target.value)}
         />

         <input
          type="number"
          placeholder='number'
          value={amount}
          onChange={e=>setamount(e.target.value)} 
         />

         <button type='submit'>add</button>
      </form>

      <ul>
        {list.map(item=>(
          <li>
            {item.title} - {item.amount}
          </li>
        ))}
      </ul>
    </div>
  )

}

export default App