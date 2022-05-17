import React from 'react'
import { Card , Container } from 'react-bootstrap'
import ItemCount from '../ItemCount/ItemCount'
import './Item.css'


const Item = ({el}) => {
    const{name, price, img}= el
  return (
      <Container>
        
        <Card  style={{ width: '18rem' }} >
            <Card.Img  variant="top height-20" src= {img} />
        <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {price}
        </Card.Text>
        <button>Detalle</button>
        </Card.Body>
        </Card>
        
      
   
      </Container>
    )
}

export default Item