import { useState } from "react"


interface info{
  name:string;
  age:number;
  email:string;
}
const Userprofile = () => {
  const [profile,setprofile]=useState<info>({
    name:'',
    age:0,
    email:'',
  });

  const updatename=(name:string)=>{
    setprofile((prev)=>({...prev,name}));
  }

  const updateage=(age:number)=>{
    setprofile((prev)=>({...prev,age:+age}));
  }

  const updateEmail=(email:string)=>{
    setprofile((prev)=>({...prev,email}));
  }
  return (
    <div>
      <h1>There is your details -</h1>

      <input type="text" placeholder="Enter your name" value={profile.name} onChange={(e)=>updatename(e.target.value)}/>

      <input type="number" placeholder="Enter your age" value={profile.age?profile.age:''} onChange={e=>updateage(e.target.value)} />

      <input type="emial" placeholder="Enter your email" value={profile.email} onChange={e=>updateEmail(e.target.value)} />
      
      <section>
        <h1>Your Details</h1>
        <h4>Name: {profile.name}</h4>
        <h4>Age: {profile.age}</h4>
        <h4>Email: {profile.email}</h4>
      </section>
    </div>
  )
}

export default Userprofile