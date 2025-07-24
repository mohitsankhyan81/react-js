import Greet from "./comp/Greet"
import Userstatus from "./comp/Userstatus"
import Weather from "./comp/Weather"

const App = () => {
  return (
    <div>
      <Weather/>
      <Userstatus loggin={true} isadmin={true}/>
      <Greet timeofday="morning"/>
    </div>
  )
}

export default App