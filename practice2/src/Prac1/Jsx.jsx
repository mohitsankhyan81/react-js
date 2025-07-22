const Jsx = () => {
  const name="mohit Sankhyan";
  const multiply=(a,b)=> a*b
  const spectialclass='myname';
  return (
    <div>
      <p>2+2 = {2+2}</p>
      <h1>My name is {name}</h1>
      <p>My frind list {[' alex ','john ','mintu ']}</p>
      <p>a * b = {multiply(2,3)}</p>
      <p className={spectialclass}>this is the special class</p>
    </div>
  )
}

export default Jsx;