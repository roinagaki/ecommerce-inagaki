import { useState } from "react"
import './ItemCount.css'


 export const ItemCount = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState(initial);

    const rest = () =>{
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const sum =() => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    function addItem() {
      onAdd(count);
  }

    
  return (
    <section className='itemCount'>
    <ul className='count__list'>
      <button type='button' onClick={rest}>-</button>
      <span>{count}</span>
      <button type='button'  onClick={sum}>+</button>
    </ul>
    <button className='count__button'
      
      onClick = { addItem }
    >
      AGREGAR AL CARRITO
    </button>
  </section>
  )
}

export default ItemCount