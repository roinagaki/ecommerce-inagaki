import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({data}) => {
    const {name, price, img}= data
  return (
    <div className="row" >
      <div className="col">
        <img src={img} />
      </div>
      <div className="col">
        <h1>{name}</h1>
        <h2></h2>
        <p>{price}</p>
        <ItemCount/>
      </div>
     
    </div>

  )
}

export default ItemDetail