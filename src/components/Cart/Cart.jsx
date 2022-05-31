import { useCartContext } from "../../Context/CartContext"
import {Button} from 'react-bootstrap'
import { Link } from "react-router-dom";


const Cart = () => {
  const { cartList, clearCart, totalCount, removeItem, totalPrice } = useCartContext()

  if (!totalCount) {
    return (
        <div className="cart">
            <h1>El pedido está vacío</h1>
            <Link  to='/'>
                <button>Volver al menú</button>
            </Link>
        </div>
    );
}

  return (
    <div className="cart">
      <h1 className="cart__title">Su pedido:</h1>
      {cartList.map(el => <li>{el.name} - {el.price} - {el.cantidad} - <Button variant="danger" onClick={()=>removeItem(el.id)}> X {removeItem}</Button></li>)}
      <h2>El precio total es {totalPrice() !== 0 && totalPrice()} </h2>
      <button onClick={clearCart}>Vaciar pedido</button>

    </div>
  )
}

export default Cart