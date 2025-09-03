import { useState,useEffect } from "react"

interface User{
  id:number;
  name:string;
  username:string;
  email:string;
  phone:number;
}
const UseEffect = () => {
  const [users,setusers]=useState<User[]>([]);
  const [loading,setloading]=useState<boolean>(true);
  const [error,seterror]=useState<string|null|number>(null);

  useEffect(()=>{
    const fetchuser=async()=>{
      try{
        const response=await fetch("https://jsonplaceholder.typicode.com/users")
        if(!response.ok){
          throw new Error('Network response in not ok');
        }
        const data:User[]=await response.json();
        setusers(data);
      }
      catch(error){
        seterror(error instanceof Error?error.message:"An error accor");
      }
      finally{
        setloading(false);
      }
    }
    fetchuser();
  })

  if(error)return<><h1>error {error}</h1></>
  if(loading)return <><h1>Loading...</h1></>

  return (
    <div>
      <thead>
        <tr>
        <th>Name</th>
        <th>Username</th>
        <th>Email</th>
        <th>Phone</th>
      </tr>
      </thead>
      <tbody>
        {users.map(user=>(
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
          </tr>
        ))}
      </tbody>
    </div>
  )
}

export default UseEffect