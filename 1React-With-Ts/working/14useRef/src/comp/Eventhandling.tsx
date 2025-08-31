import React from "react"

const Eventhandling = () => {
  const handleclick=(e:React.MouseEvent<HTMLButtonElement>)=>{
    console.log('Button clicked',e.currentTarget)
  }

  const handleMouseEnter=(e:React.MouseEvent<HTMLDivElement>)=>{
    console.log('mouseenter',e.currentTarget)
  }
  return (
    <div onMouseEnter={handleMouseEnter}>
      <h2>Event Handling Example</h2>
      <button onClick={handleclick}>Click me</button>
    </div>
  )
}

export default Eventhandling