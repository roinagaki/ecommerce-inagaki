import { useEffect, useState} from "react"
import { task } from "../productos"
import ItemList from "../components/ItemList/ItemList"
import { useParams } from 'react-router-dom'
import './ItemListContainer.css'
import { getFirestore, collection, getDocs, where, query } from 'firebase/firestore'




const ItemListContainer = ( { saludar } ) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams() 

    useEffect(() =>{
      const db = getFirestore()
      const queryCollection = collection(db, 'items')
      if (!id){
          getDocs(queryCollection)
          .then(resp => setData( resp.docs.map(el =>  ( { id: el.id, ...el.data() } ) ) ))
          .catch((err)=> console.log(err))
          .finally(()=>setLoading(false)) 
      } else { 
        const queryCollectionFilter = query(queryCollection, where('category','==',id));
        getDocs(queryCollectionFilter)
          .then(resp => setData( resp.docs.map(el =>  ( { id: el.id, ...el.data() } ) ) ))
          .catch((err)=> console.log(err))
          .finally(()=>setLoading(false)) 
      }
    },[id])

   
    
    console.log(data)
 

  return (
    <div className="itemListContainer">
    <div>{saludar}</div>
    <div style={{ display: 'flex', flexDirection:'row' , flexWrap:'wrap'}}>
      {loading ? <h2>Cargando...</h2> : <ItemList data={data}/> }
    </div>
    </div>
  )
}

export default ItemListContainer