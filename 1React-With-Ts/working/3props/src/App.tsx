import Button from "./comp/Button"

const App = () => {
  return (
    <div>
      <Button label="Submit" onClick={()=>console.log("clicked")} disabled={false}/>
    </div>
  )
}

export default App