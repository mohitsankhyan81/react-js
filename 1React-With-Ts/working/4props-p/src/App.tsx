import UserInfo from "./comp/UserInfo"
import Admin from "./comp/Admin"
import {Info,AdminInfo} from "./type"

const App=()=>{
  const user:Info={id:1,name:"John Doe",email:"john@gmail.com"}
  const admin:AdminInfo={id:2,name:"Jane Smith",email:"jane@gmail.com",role:"admin",lastlogin:new Date()}

  return(
    <div>
      <UserInfo user={user}/>
      <Admin admin={admin}/>
    </div>
  )
}

export default App
