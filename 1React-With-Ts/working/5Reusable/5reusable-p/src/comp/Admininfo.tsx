type admininfo={
  username:string;
  email:string;
  age:number;
  location1:string;
  admin:string;
}

const Admininfo = ({username,email,age,location1,admin}:admininfo) => {
  return (
    <div>
      <p>{username}</p>
      <p>{email}</p>
      <p>{age}</p>
      <p>{JSON.stringify(location1)}</p>
      <p>{admin}</p>
    </div>
  )
}

export default Admininfo