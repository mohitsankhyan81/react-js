import React, { useContext, useEffect, useState } from 'react'
import Login from './components/auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'


const App = () => {
  const [user,setuser]= useState(null);
  const authdata=useContext(AuthContext)
  console.log(authdata);
  const handleLogin=(email,password)=>{
    if(email=='admin@me.com' && password=='123'){
      setuser('admin');
    }
    else if(authdata && authdata.employee.find((e)=>email==e.email && password==e.password)){
      setuser('employee');
    }
    else{
      alert("Invalid Creadientals");
    }
  
  }
  return (
    <>
      {!user?<Login handleLogin={handleLogin}/>:''}
      {user=='admin'?<AdminDashboard/>:<EmployeeDashboard/>}
    </> 
  )
}

export default App