import { AdminInfo } from "../type"

type Props={admin:AdminInfo}

const Admin=({admin}:Props)=>{
  return(
    <div>
      <h1>Admin info</h1>
      <p>ID:{admin.id}</p>
      <p>Name:{admin.name}</p>
      <p>Email:{admin.email}</p>
      <p>Role:{admin.role}</p>
      <p>Last Login:{admin.lastlogin.toLocaleString()}</p>
    </div>
  )
}

export default Admin
