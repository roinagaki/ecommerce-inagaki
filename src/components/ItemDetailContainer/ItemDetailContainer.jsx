import React, { useEffect, useState } from 'react'
import { task } from '../../productos';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const { detailId } = useParams ()

    useEffect(() => {
        task(detailId)   
        .then(respuesta=> setData(respuesta))
        .catch((err)=> console.log(err))
           
    }, [])
    

    
  return (
    <div>
        <ItemDetail data={data}/>
    </div>
    
  )
}

export default ItemDetailContainer