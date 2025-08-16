import { AiFillStar } from 'react-icons/ai';
import {BsFillBagHeartFill} from 'react-icons/bs'

function Card() {
  return (
    <div>
       <section className='card'>
          <img src='https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg' className="card-img" alt='Shoe'/>
          <div className='card-details'>
            <h3 className='card-title'>Shoe</h3>
            <section className='card-reviews'>
              <AiFillStar className='ratings-start'/>
              <AiFillStar className='ratings-start'/>
              <AiFillStar className='ratings-start'/>
              <AiFillStar className='ratings-start'/>
              <span className='total-reviews'>
                4
              </span>
            </section>
            <section className='card-price'>
              <div className='Price'>
                <del>$300</del>200
              </div>
              <div className='bag'>
                <BsFillBagHeartFill className='bag-icon'/>
              </div>
            </section>
          </div>
        </section>
    </div>
  )
}

export default Card;
