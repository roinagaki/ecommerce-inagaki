import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import './CartWidget.css'


const CartWidget = () => {
  return (
    <Link to='/cart'>
            <div className='cartWidget'>
        <FontAwesomeIcon className='cartWidget__icon'  icon={faCartShopping} />
        <span className="cartWidget__counter">0</span>
            </div>
        </Link>
  )
}

export default CartWidget


