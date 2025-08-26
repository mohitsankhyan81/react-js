import './Sidebar.css'; 
import {CiShoppingCart} from 'react-icons/ci'
import Category from './Category/Category'
import Price from './Price/Price'
import Color from './Color/Color'
function Sidebar({handleChange}) {

  return <>
    <section className='Sidebar'>
      <div className='logo-container'>
        <h1>
          <CiShoppingCart />
        </h1>
      </div>
      <Category handleChange={handleChange}/>
      <Price handleChange={handleChange}/>
      <Color handleChange={handleChange}/>
    </section>
  </>
}
export default Sidebar;
