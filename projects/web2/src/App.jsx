import React, { useEffect } from 'react'
import Login from './components/auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './util/LocalStorage'

const App = () => {
  useEffect(()=>{
    setLocalStorage()
    getLocalStorage()
  },)
  return (
    <>
      <Login/>
      <EmployeeDashboard/>
      <AdminDashboard/>
    </>
  )
}

export default App