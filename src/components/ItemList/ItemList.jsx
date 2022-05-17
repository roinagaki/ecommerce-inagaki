import React from 'react'
import Item from '../Item/Item'

const ItemList = ({data}) => {
  return (
    <div style={ { display:'flex' } } >
        {
            data?.map(el => <Item key={el.id} el={el}/> )
        }
    </div>
  )
}

export default ItemList