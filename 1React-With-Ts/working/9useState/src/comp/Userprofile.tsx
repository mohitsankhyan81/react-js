import { useState } from "react"

interface userinfo{
  name:string;
  age:number;
  email:string;
}
const Userprofile = () => {

  const [profile,setprofile] = useState<userinfo>({
    name:'',
    age:0,
    email:''
  })

  const updatedata=(name:string)=>{
    setprofile((prev)=>({...prev,name}))
  }

  const updateage=(age:string)=>{
    setprofile((prev)=>({...prev,age:+age}))
  }

  const updateEmail=(email:string)=>{
    setprofile((prev)=>({...prev,email}))
  }

  return (
    <div>
      <h1>Fill this inputs :-</h1>

      <input
        type="text"
        placeholder="Enter Name"
        value={profile.name}
        onChange={(e)=>updatedata(e.target.value)}
      />

      <input
        type="text"
        placeholder="Enter Age"
        value={profile.age>0?profile.age:''}
        onChange={(e)=>updateage(e.target.value)}
      />

      <input
        type="text"
        placeholder="Enter Email hear"
        value={profile.email}
        onChange={(e)=>updateEmail(e.target.value)}
      />


      <h1>Profile data hear:-</h1>

      <p>Name: {profile.name}</p>
      <p>Age: {profile.age}</p>
      <p>Email: {profile.email}</p>
    </div>
  )
}

export default Userprofile