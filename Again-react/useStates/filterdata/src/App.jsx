import React, { useState } from 'react'

const App = () => {
  const [search,setsearch]=useState('');
  const users=['Mohit','Ankit','Robin','Krish','Sahil','Rohit'];

  const filterSearch=users.filter(u=>{
    return u.toLowerCase().includes(search.toLowerCase());
  })
  return (
    <div>
      <h1>Searching</h1>
      <input
        type='text'
        placeholder='search name'
        value={search}
        onChange={e=>setsearch(e.target.value)}
      />

      <ul>
        {filterSearch.map((u,i)=>(
          <li key={i}>{u}</li>
        ))}
      </ul>
    </div>
  )
}

export default App