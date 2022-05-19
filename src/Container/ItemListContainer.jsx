import { useEffect, useState} from "react"
import { task } from "../productos"
import ItemList from "../components/ItemList/ItemList"
import { useParams } from 'react-router-dom'
import './ItemListContainer.css'




const ItemListContainer = ( { saludar } ) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)

    const { id } = useParams() 

    useEffect(() => {
        if (id) {
            task()  
            .then(respuesta=> setData(respuesta.filter((prods) => prods.category === id)))
            .catch((err)=> console.log(err))
            .finally(()=>setLoading(false))                             
        } else {
            task()  
            .then(respuesta=> setData(respuesta))
            .catch((err)=> console.log(err))
            .finally(()=>setLoading(false))                 
        }
    }, [id])

    
    

 

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