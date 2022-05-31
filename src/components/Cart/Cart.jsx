import { useCartContext } from "../../Context/CartContext"
import {Button} from 'react-bootstrap'
import { Link } from "react-router-dom";


const Cart = () => {
  const { cartList, clearCart, totalCount, removeItem, totalPrice } = useCartContext()



  return (
    <div>
    {cartList.length === 0 ? 
        <div className="container mt-5">
            <label className="alert alert-warning">NO HAY PRODUCTOS EN EL CARRITO</label><br />
            <Link to='/'>
                <button className='btn btn-outline-primary'>Seleccionar productos</button>
            </Link>
        </div>
:
<>

    <div className="cart">
      <h1 className="cart__title">Su pedido:</h1>
      {cartList.map(el => <li>{el.name} - {el.price} - {el.cantidad} - <Button variant="danger" onClick={()=>removeItem(el.id)}> X {removeItem}</Button></li>)}
      <h2>El precio total es {totalPrice() !== 0 && totalPrice()} </h2>
      <button onClick={clearCart}>Vaciar pedido</button>

    </div>
    </>
}
</div>
  )
}
  
  

export default Cart