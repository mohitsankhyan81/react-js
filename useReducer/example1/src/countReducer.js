const initialState={count:0}

function counterReducer(state,action){
  switch (action.type){
    case "increment":
      return {count: state.count +1};  
    case "dicrement":
      return {count: state.count-1};
    case "incremenbyamount":
      return {count: state.count + action.payload}
    case "dicrementbyamount":
      return {count: state.count - action.payload};
    default:
      return state;
  }
}

export {initialState,counterReducer} ;