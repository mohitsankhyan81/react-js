import { useState } from "react"

const Switcher = () => {
  const [sw,setsw]=useState(false);
  return (
    <div>
      {sw? (
        <span>
          Dark
        </span>
      ):(
        <span>
          Light
        </span>
      )}

      <br/>
      <input type="text"  key={sw?'Dark':'Light'}/>
      <button onClick={()=> setsw((s)=>!s)}>Switch</button>
    </div>
  )
}

export default Switcher