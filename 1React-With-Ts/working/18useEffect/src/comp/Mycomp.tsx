import { useState,useEffect } from "react"


const Mycomp = () => {
  const [data,setdata]=useState<null>(null);

  useEffect(()=>{
    const fetchdata=async()=>{{
      try{
        const response=await fetch('https://dummyjson.com/products/1')
        const result=await response.json();
        setdata(result);
      }
      catch(error){
        console.error('Error fetching data',error);
    }}
  },[])
  return (
    <div>
      
    </div>
  )
}

export default Mycomp