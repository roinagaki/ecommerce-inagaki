import React from 'react'
import { Card } from 'react-bootstrap'
import ItemCount from '../ItemCount/ItemCount'
import './Item.css'


const Item = ({el}) => {
    const{name, price}= el
  return (
    <div>
    <Card  style={{ width: '18rem' }} >
        <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
      {price}
    </Card.Text>
    <ItemCount/>
    </Card.Body>
    </Card>
    </div>
  )
}

export default Item