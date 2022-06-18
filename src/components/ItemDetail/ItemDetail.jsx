import React, {  useState } from 'react'
import { useCartContext } from '../../Context/CartContext';
import ButtonCard from '../ButtonCard/ButtonCard';
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'



const  ItemDetail = ({data}) => {
  const [inputType, setInputType] = useState('itemCount');
  
  const {addToCart} = useCartContext()
  
  const onAdd = (cant) => {
  
    addToCart( { ...data, quantity: cant } )
    setInputType('ButtonCard');
} 

    


  const {name, price, img, stock}= data
  
  return (
    <div className="itemDetail">
    <img className="itemDetail__img" src={img} alt="" />
    <div className='itemDetail__info'>
        <h3 className="itemDetail__title">{name}</h3>
        <p className="itemDetail__detail">{'$'+ price}</p>
        {inputType === 'itemCount' ?
       <ItemCount initial={1} stock={stock} onAdd={onAdd}/>:
            <ButtonCard/>}
    </div>
</div>

  )
}


export default ItemDetail