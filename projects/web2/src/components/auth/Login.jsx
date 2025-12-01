import React, { useState } from 'react'

const Login = ({handleLogin}) => {

  const[email,setemail]=useState('');
  const[password,setpassword]=useState('');

  const submitHandler=(e)=>{
    e.preventDefault()
    handleLogin(email,password)
    setemail("")
    setpassword("")
  }
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 border-emerald-600 p-20 rounded-xl'>
        <form onSubmit={(e)=>{submitHandler(e)}} className='flex flex-col items-center justify-center'>
        <input required 
        className='text-black outline-none bg-transprant border-2 border-emerald-600  py-3 px-5 rounded-full text-xl placeholder:text-white'
         type="email"
          placeholder='Enter Your Email...'
          value={email}
          onChange={(e)=>setemail(e.target.value)}
          />
        <input required 
        className='text-black outline-none bg-transprant border-2 border-emerald-600  py-3 px-5 rounded-full text-xl mt-3 placeholder:text-white' 
        type="password" 
        placeholder='Enter password'
        value={password}
        onChange={(e)=>setpassword(e.target.value)}
        />
        <button  className='text-white outline-none bg-red-300 border-2  py-3 px-5 rounded-full text-xl mt-7 placeholder:text-white'>Log in</button>
        </form>
      </div>
    </div>
  )
}

export default Login