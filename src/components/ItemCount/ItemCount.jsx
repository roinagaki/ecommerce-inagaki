import { useState } from "react"


 export const ItemCount = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState(initial);

    const restar = () =>{
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const sumar =() => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const onClick = () => { onAdd = console.log(count) }

  return (
    <section className='itemCount'>
    <ul className='count__list'>
      <button type='button' onClick={restar}>-</button>
      <span>{count}</span>
      <button type='button' onClick={sumar}>+</button>
    </ul>
    <button
      type='submit'
      className='count__button'
      value={count}
      onClick = { onClick }
    >
      AGREGAR AL CARRITO
    </button>
  </section>
  )
}

export default ItemCount