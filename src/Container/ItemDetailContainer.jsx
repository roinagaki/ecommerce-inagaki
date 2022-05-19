import React, { useEffect, useState } from 'react'
import { task } from '../productos';
import ItemDetail from '../components/ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom'
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const { detailId } = useParams()

    useEffect(() => {
        task(detailId)   
        .then(respuesta=> setData(respuesta))
        .catch((err)=> console.log(err))
           
    }, [])
    
   console.log(detailId)

  return (
    <div className='ItemDetailContainer'>
        <ItemDetail data={data}/>
    </div>
    
  )
}

export default ItemDetailContainer