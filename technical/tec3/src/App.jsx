import { useState } from "react"


const App = () => {

  const [movies,newMovies]=useState({
    title:"eqblizer 3",
    rating:7,
  })

  const handlefile=()=>{
    const copymovies={
      ...movies,
      rating:5
    }
    newMovies(copymovies);
  }
  return (
    <div>
      <h1>{movies.title}</h1>
      <p>{movies.rating}</p>

      <button onClick={handlefile}>Change Rating</button>
    </div>
  )
}

export default App