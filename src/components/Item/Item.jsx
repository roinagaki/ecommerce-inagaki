import React from 'react'
import { Link } from 'react-router-dom'

import './Item.css'


const Item = ({el}) => {
    const{name, price, img, category, id}= el
    
  return (
    <div className="item">
    <img className="item__img" src={img} alt="" />
    <div className="item__filter"></div>
    <div className='item__info'>
        <p className='item__category'>{category}</p>
        <h3 className="item__title">{name}</h3>
        <p className='item__price'>{`Precio: $${price}`}</p>
        <Link to={`/detail/${id}`}>
            <button className="item__addBtn" >Agregar al pedido</button>
        </Link>
    </div>
</div>
    )
}

export default Item