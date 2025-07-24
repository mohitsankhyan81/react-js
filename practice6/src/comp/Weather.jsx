const Weather = () => {
  let temp=26;
  
  if(temp<15){
    return <h1>There is cold! outside</h1>
  }
  else if(temp>=15&&temp<=25){
    return <h1>it is nice ourside</h1>
  }
  else if(temp>25){
    return <h1>there is hot outside</h1>
  }
}

export default Weather