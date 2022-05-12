import React from 'react'
import { Card, Button } from 'react-bootstrap'

const Item = ({el}) => {
    const{name, price}= el
  return (
    <div>
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
      {price}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
    </Card.Body>
    </Card>
    </div>
  )
}

export default Item