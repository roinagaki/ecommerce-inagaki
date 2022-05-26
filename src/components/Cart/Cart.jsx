import { useCartContext } from "../../Context/CartContext"


const Cart = () => {
  const { cartList, clearCart } = useCartContext()

  return (
    <div className="cart">
      <h1 className="cart__title">Su pedido:</h1>
      {cartList.map(el => <li>{el.name}</li>)}
      <p>Total Price </p>
      <button onClick={clearCart}>Vaciar pedido</button>

    </div>
  )
}

export default Cart