import {useEffect} from "react";

const BasicEffect = () => {
  useEffect(()=>{
    console.log("Basic Effects and component");
  },[])
  return (
    <div>
      <h1>Check the console to see the messege</h1>
    </div>
  )
}

export default BasicEffect