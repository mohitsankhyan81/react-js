import { useReducer,useState } from "react";
import { counterReducer,initialState } from "../countReducer";
const Counter = () => {
  const [state,dispatch]=useReducer(counterReducer,initialState);
  const [input,setinput]=useState(0);

  const handleincremt=()=>dispatch({type:"increment"});
  const handledicrement=()=>dispatch({type:"dicrement"});

  const incremenbyamount=()=>{dispatch({type:"incremenbyamount",payload:+input});
  setinput(0); 
}
  const dicrementbyamount=()=>{dispatch({type:"dicrementbyamount",payload:+input});
  setinput(0); 
}
  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={handleincremt}>increment</button>
      <button onClick={handledicrement}>dicrement</button>

      <div>
        <input type="number"  value={input} onChange={e=>setinput(e.target.value)}/>
        <button onClick={incremenbyamount}>add</button>
        <button onClick={dicrementbyamount}>subtract</button>

      </div>

    </div>
  )
}

export default Counter