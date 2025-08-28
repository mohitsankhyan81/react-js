import Admininfo from "./comp/Admininfo"
import Userinfo from "./comp/Userinfo"

const App = () => {
  return (
    <div>
      <h1>User Info </h1>
      <Userinfo  username="Alex" email="alex@gmail.com" age={45} location={["Earth","USA"]} />
      <h1>Admin Info </h1>
      <Admininfo username="Alex" email="alex@gmail.com" age={45} location={["Mars","UAE"]} admin="yes"/>
    </div>
  )
}

export default App