import Button from "./comp/Button"
const App = () => {
  return (
    <div>
      <Button label="submit" onClick={()=>console.log("Clicked")} disabled={false}/>
    </div>
  )
}

export default App