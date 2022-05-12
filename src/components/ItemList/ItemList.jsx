import React from 'react'
import Item from '../Item/Item'

const ItemList = ({data}) => {
  return (
    <div>
        {
            data?.map(el => <Item key={el.id} el={el}/> )
        }
    </div>
  )
}

export default ItemList