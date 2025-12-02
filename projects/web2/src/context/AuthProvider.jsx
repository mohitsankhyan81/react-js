import React, { Children, createContext, useEffect, useState } from 'react'
import { getLocalStorage } from '../util/LocalStorage';

export const AuthContext=createContext();
const AuthProvider = ({children}) => {
  const [userData,setUserdata]=useState(null);

  useEffect(()=>{
      const {employee,admin}=getLocalStorage()
      setUserdata({employee,admin});

  },[])
  return (
    <div>
      <AuthContext.Provider value={userData}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider