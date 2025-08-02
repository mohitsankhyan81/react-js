import { useReducer } from "react"
const initialState={count:0};

const reducer=(state,action)=>{
  switch (action.type){
    case 'increment':
      return {...state,count: state.count +1};
      case 'dicrement':
        return {...state,count: state.count-1};
      case 'reset':
        return {...state,count:0};
      default:
        return state;
  }
}
const App = () => {
  const[state,disparch] =  useReducer(reducer,initialState);

  return (
    <div>
      <button onClick={()=>disparch({type:"increment"})}>+</button>
      <button onClick={()=>disparch({type:"dicrement"})}>-</button>
      <button onClick={()=>disparch({type:"reset"})}>reset</button>
      <h1>count: {state.count}</h1>
    </div>
  )
}

export default App