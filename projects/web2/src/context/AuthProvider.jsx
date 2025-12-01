import React, { createContext } from 'react'


const AuthProvider = ({children}) => {
  return (
    <div>
        {children}
    </div>
  )
}

export default AuthProvider