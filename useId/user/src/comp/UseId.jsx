import { useId } from "react"

const UseId = () => {
  const id=useId();
  return (
    <div>
      <label htmlFor={`${id}-email`}>Email : </label>
      <input type="text" id={`${id}`} />
      <br/>
      <label htmlFor={`${id}-password`}>Password : </label>
      <input type="password" id={`${id}-password`} />
    </div>
  )
}

export default UseId