import React from 'react'

const Navbar = () => {
  return (
    <header>
      <div className='container'>
        <div className='grid navbar-grid'>
          <div className='logo'>
            <h1>Mohit Sankhyan</h1>
          </div>
          <nav>
            <ul>
              <li><a href="">Home</a></li>
              <li><a href="">About</a></li>
              <li><a href="">Details</a></li>
              <li><a href="">Contact us</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar