import { useEffect, useState } from "react"


interface User{
  id:number;
  name:string;
  username:string;
  email:string;
  phone:number;
}
const Userlist = () => {
  const [users,setusers]=useState<User[]>([]);
  const [loading,setloading]=useState<boolean>(true);
  const [error,seterror]=useState<string|null|number>(null);

  useEffect(()=>{
    const fetchUsers=async()=>{
      try{
        const response= await fetch("https://jsonplaceholder.typicode.com/users")
        if(!response.ok){
          throw new Error('Network response is not ok')
        }
       const data:User[]=await response.json()
       setusers(data);
      }
      catch(error){
        seterror(error instanceof Error? error.message: "An error accor")
      }
      finally{
        setloading(false);
      }
    }
    fetchUsers()
  },[])

  if(loading)return<>loding...</>
  if(error) return<>Error: {error}</>

  return (
    <div>
      <thead>
        <tr>
          <th>ID</th>
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

export default Userlist