import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'



const  ItemDetail = ({data}) => {
    const {name, price, img}= data
  return (
    <div className="itemDetail">
    <img className="itemDetail__img" src={img} alt="" />
    <div className='itemDetail__info'>
        <h3 className="itemDetail__title">{name}</h3>
        <p className="itemDetail__detail">{price}</p>
       <ItemCount/>
    </div>
</div>

  )
}

export default ItemDetail