type userinfo={
  username:string;
  email:string;
  age:number;
  location1:string;
}

const UserInfo= ({username,email,age,location1}:userinfo) => {
  return (
    <div>
      <p>{username}</p>
      <p>{email}</p>
      <p>{age}</p>
      <p>{JSON.stringify(location1)}</p>
    </div>
  )
}

export default UserInfo