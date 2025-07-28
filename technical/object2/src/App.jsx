import { useState } from "react"
import CompOne from "./comp/CompOne";
import CompTwo from "./comp/CompTwo";
const App = () => {
  const [count,serCount]=useState(0);
  return (
    <div>
      <CompOne count={count} onClickHandler={()=>serCount(count+1)}/>
      <CompTwo count={count} onClickHandler={()=>serCount(count+1)}/>
    </div>
  )
}

export default App