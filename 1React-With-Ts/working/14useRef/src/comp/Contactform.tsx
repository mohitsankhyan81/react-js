import { useState, type ChangeEvent, type FormEvent } from "react"

interface infointerface{
  name:string;
  email:string;
}

const Contactform = () => {
  const [formdata,setformdata]=useState<infointerface>({
    name:'',
    email:'',
  });

  const handlechange=(event:ChangeEvent<HTMLInputElement>)=>{
    const {name,value}=event.target;
    setformdata(prev=>({...prev,[name]:value}));
  }
  const handleSubmit=(event:FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    console.log('finish',formdata)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" placeholder="Enter your name" name="name" onChange={handlechange} />
      </label>
      <label>
        Email:
        <input type="emial" placeholder="Enter your email" name="email" onChange={handlechange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  )
}

export default Contactform