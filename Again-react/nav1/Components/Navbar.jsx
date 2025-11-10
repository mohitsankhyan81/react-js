import React from 'react'
import { Link } from 'react-router'
const Navbar = () => {
  return (
    <nav>
      <div className='container'>
        <div>
          <h1>Mohit Sankhyan</h1>
        </div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/details">details</Link>
          <Link to="/contact">contact</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar