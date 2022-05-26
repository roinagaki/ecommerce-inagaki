import { useState } from "react"


 export const ItemCount = ({stock, initial, onAdd, handleInputType}) => {

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

    // const onClick = () => { onAdd = console.log(count) }

  //   function addToCart() {
     
  //     handleInputType();
  // }

  return (
    <section className='itemCount'>
    <ul className='count__list'>
      <button type='button' onClick={rest}>-</button>
      <span>{count}</span>
      <button type='button' onClick={sum}>+</button>
    </ul>
    <button className='count__button'
      // value={count}
      onClick = { addItem }
    >
      AGREGAR AL CARRITO
    </button>
  </section>
  )
}

export default ItemCount