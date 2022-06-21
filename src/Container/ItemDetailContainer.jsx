import React, { useEffect, useState } from 'react'
import ItemDetail from '../components/ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom'
import './ItemDetailContainer.css'
import { doc, getDoc, getFirestore } from 'firebase/firestore';

const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true)
    const { detailId } = useParams()
   
   
    useEffect(() => {
      const db = getFirestore()
      const dbQwery = doc(db, 'items', detailId)
      getDoc(dbQwery)
      .then(resp => setData( { id: resp.id, ...resp.data() } ) ) 
      .catch((err)=> console.log(err))
      .finally(setLoading(false)) 
    }, [detailId])


    

  return (
    <div className='ItemDetailContainer'>
      {loading ? <h2>Cargando...</h2> : <ItemDetail data={data}/> }    
    </div>
    
  )
}

export default ItemDetailContainer