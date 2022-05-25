import React, { useState } from 'react'
import ButtonCard from '../ButtonCard/ButtonCard';
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'



const  ItemDetail = ({data, item}) => {
  const [inputType, setInputType] = useState('itemCount');
  
  
function onAdd(quantity) {
    addToCart({...item, quantity})
} 


function handleInputType() {
  setInputType('ButtonsCard');
}
  
  const {name, price, img}= data

  return (
    <div className="itemDetail">
    <img className="itemDetail__img" src={img} alt="" />
    <div className='itemDetail__info'>
        <h3 className="itemDetail__title">{name}</h3>
        <p className="itemDetail__detail">{price}</p>
        {inputType === 'itemCount' ?
       <ItemCount initial={1} stock={5} onAdd={onAdd} handleInputType={handleInputType}/>:
            <ButtonCard/>}
    </div>
</div>

  )
}

export default ItemDetail