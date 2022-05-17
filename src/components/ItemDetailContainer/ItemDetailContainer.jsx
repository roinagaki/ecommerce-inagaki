import React, { useEffect, useState } from 'react'
import { task } from '../../productos';

const ItemDetailContainer = () => {
    const [data, setData] = useState({});
  
  
    useEffect(() => {
      task
      .then(resp =>  setData(resp.find(item => item.id === "1")))
      .catch(err => console.log(err))
      
    }, [])
     
    
  return (
    <div>
        <ItemDetail data={data}/>
    </div>
    
  )
}

export default ItemDetailContainer