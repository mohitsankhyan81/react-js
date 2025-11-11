import React from 'react'
import { useState } from 'react'

const App = () => {
  const[ison,setison]=useState(false);
  return (
    <div>
      <h1>{ison?"on":"off"}</h1>
      <button onClick={()=>setison(!ison)}>Toggle</button>
    </div>
  )
}

export default App