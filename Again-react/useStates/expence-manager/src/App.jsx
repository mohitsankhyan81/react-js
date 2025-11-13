import React, { useState } from 'react'

const App = () => {

  const [expence,setecpencce]=useState([]);
  const [item,setitem]=useState('');
  const [amount,setamount]=useState('');

  const getdata=()=>{
    if(!item||!amount)return;
    setecpencce([...expence,{item,amount:+amount}]);
    setitem('');
    setamount('');
  }
  return (
    <div>
      <h1>Expencce Manager</h1>

      <input 
      type="text" 
      placeholder='enter item name'
      value={item}
      onChange={e=>setitem(e.target.value)}
      />

      <input
       type="number"
       placeholder='Select item'
       value={amount}
       onChange={e=>setamount(e.target.value)}
       />

       <button onClick={getdata}>Add</button>


       <ul>
        {expence.map((u,i)=>(
          <li key={i}>
            {u.item} - {u.amount}
          </li>
        ))}
       </ul>


       <h1>Total: ${expence.reduce((a,b)=>a+b.amount,0)}</h1>
    </div>
  )
}

export default App