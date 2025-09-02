//usereducer 

import { useReducer } from "react"

type Action={type:'increment'}|{type:'dicrement'}

type state={
  count:number;
}
const reducer =(state:state,action:Action):state=>{
  switch (action.type){
    case 'increment':
      return {count:state.count+1};
    case 'dicrement':
      return {count:state.count-1};
    default:
      return state;
  }
}
const Counter = () => {
  const [state,dispatch]=useReducer(reducer,{count:0});
  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={()=>dispatch({type:'increment'})}>Increment</button>
      <button onClick={()=>({type:'dicrement'})}>Dicrement</button>
    </div>
  )
}

export default Counter