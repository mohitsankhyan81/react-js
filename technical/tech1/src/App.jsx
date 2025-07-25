const Button=()=>{
  const handleclick=()=>console.log("my name is mohit");
  return <button onClick={handleclick}>Click</button>
}

const App = () => {
  return (
    <div>
      <Button/>
    </div>
  )
}

export default App