// type userSharpe={
//   name:string;
//   id:number;
//   isStarted:boolean;
// }

interface userSharpe {
  name:string;
  id:number;
  isStarted:boolean;
}
const User = ({name,id,isStarted}:userSharpe) => {
  return (
    <div>
      <h2>{name}</h2>
      <h2>{id}</h2>
      <h2>{isStarted}</h2>
    </div>
  )
}

export default User