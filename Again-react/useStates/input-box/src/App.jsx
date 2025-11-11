import React, { useState } from 'react'

const App = () => {
  const [name,setname]=useState("");
  return (
    <div>
      <input type="text" value={name} onChange={e=>setname(e.target.value)}/>
      <p>name: {name}</p>

    </div>
  )
}

export default App