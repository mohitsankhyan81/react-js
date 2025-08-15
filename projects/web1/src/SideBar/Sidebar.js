import './Sidebar.css'; 
import {CiShoppingCart} from 'react-icons/ci'
import Category from './Category/Category'
import Price from './Price/Price'
import Color from './Color/Color'
function Sidebar() {
  return <>
    <section className='Sidebar'>
      <div className='logo-container'>
        <h1>
          <CiShoppingCart />
        </h1>
      </div>
      <Category/>
      <Price/>
      <Color/>
    </section>
  </>
}
export default Sidebar;
