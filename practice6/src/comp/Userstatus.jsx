const Userstatus = (props) => {

  if(props.loggin && props.isadmin){
    return <h1>Welcome Addmin</h1>
  }
  else{
    return <h1>welcome user</h1>
  }

}

export default Userstatus