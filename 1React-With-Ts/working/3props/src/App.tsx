import Button from "./comp/Button"
const app = () => {
  return (
    <div>
      <Button label="submit" onClick={()=>console.log("Clicked")} disabled={false}/>
    </div>
  )
}

export default app