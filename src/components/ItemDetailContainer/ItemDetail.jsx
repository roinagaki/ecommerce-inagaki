import React from 'react'

const ItemDetail = ({data}) => {
    const {name, price, img}= data
  return (
    <div className="row" >
      <div className="col">
        <img className="" src={img} />
      </div>
      <div className="col">
        <h1>{name}</h1>
        <h2></h2>
        <p>{price}</p>
      </div>
     
    </div>

  )
}

export default ItemDetail