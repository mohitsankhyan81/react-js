import UserInfo from './comp/UserInfo';
import Admininfo from './comp/Admininfo';
const App = () => {
  return (
    <div>
      <h1>User Info:- </h1>
      <UserInfo username="mohit" email="mohit@gmail.com" age={34} location1={["mars","earth"]}/>
      <h1>Admin Info:- </h1>
      <Admininfo username="mohit" email="mohit@gmail.com" age={34} location1={["mars","earth"]} admin="yes"/>
    </div>
  )
}

export default App