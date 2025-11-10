import React from 'react'
import Navbar from '../Components/Navbar'
import { Routes,Route } from 'react-router'
import Home from '../router/Home'
import About from '../router/About'
import Detail from '../router/Detail'
import Contact from '../router/Contact'


const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/details' element={<Detail/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </>
  )
}

export default App