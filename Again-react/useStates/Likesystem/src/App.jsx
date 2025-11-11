import React, { useState } from 'react'

const App = () => {

  const [like,setlike]=useState(false);
  const [count,setcount]=useState(0);

  const togglelike=()=>{
    setlike(!like);
    setcount(count?count-1:count+1);
  }
  return (
    <div>
      <button onClick={togglelike} style={{fontSize:30, color:like?"red":"grey"}}>❣</button>
      <p>{count} count</p>
    </div>
  )
}

export default App