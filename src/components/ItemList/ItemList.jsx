import React from 'react'
import Item from '../Item/Item'
import './ItemList.css'

const ItemList = ({data}) => {
  return (
    <div className='itemList' >
        {
            data?.map(el => <Item key={el.id} el={el}/> )
        }
    </div>
  )
}

export default ItemList