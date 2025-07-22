const Greet = () => {
  const greet="mohit";
  const date=new Date();
  return (
    <div>
      <h1>Hello World</h1>
      <p>Date : {date.toLocaleString()}</p>
    </div>
  )
}

export default Greet;