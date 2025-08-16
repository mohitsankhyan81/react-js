import "./Nav.css"
import { FiHeart } from 'react-icons/fi'
import { AiOutlineShoppingCart, AiOutlineUserAdd } from 'react-icons/ai';

function Nav({ handleInputChanges, query }) {
  return (
    <nav>
      <div className="nav-container">
        <input 
          type="text"
          placeholder="Enter your search shoes."
          onChange={handleInputChanges} 
          value={query}
        />
      </div>

      <div className="profile-container">
        <a href="#">
          <FiHeart className="nav-icons"/>
        </a>
        <a href="#">
          <AiOutlineShoppingCart className="nav-icons"/>
        </a>
        <a href="#">
          <AiOutlineUserAdd className="nav-icons"/>
        </a>
      </div>
    </nav>
  )
}

export default Nav
