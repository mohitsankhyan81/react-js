import { Info } from "../type"

type Props={user:Info}

const UserInfo=({user}:Props)=>{
  return(
    <div>
      <h2>User Information</h2>
      <p>ID:{user.id}</p>
      <p>Name:{user.name}</p>
      <p>Email:{user.email}</p>
     </div>
  )
 }

export default UserInfo
