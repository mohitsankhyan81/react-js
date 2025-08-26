const Userlist = () => {

  const users=[
    {id:1,name:"Mohit",age:43},
    {id:2,name:"Sahil",age:34},
    {id:3,name:"Robin",age:65}
  ]
  return (
    <div>
      { users.map(user=>(
        <div key={user.id}>
          <h1>name : {user.name}</h1>
          <h1>age : {user.age}</h1>
        </div>
      ))}
    </div>
  )
}

export default Userlist