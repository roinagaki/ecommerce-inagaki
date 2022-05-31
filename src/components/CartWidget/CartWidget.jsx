import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import './CartWidget.css'
import { useCartContext } from '../../Context/CartContext';


const CartWidget = () => {
  const {totalCount} = useCartContext()
  return (
    <Link to='/cart'>
            <div className='cartWidget'>
        <FontAwesomeIcon className='cartWidget__icon'  icon={faCartShopping} />
        <span className="cartWidget__counter">{totalCount() !== 0 && totalCount() }</span>
          
            </div>
        </Link>
  )
}

export default CartWidget


