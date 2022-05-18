import { useEffect, useState} from "react"
import { task } from "../../productos"
import ItemList from "../ItemList/ItemList"
import { useParams } from 'react-router-dom'



const ItemListContainer = ( { saludar } ) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)

    const { id } = useParams() 

    useEffect(() => {
        if (id) {
            task()  
            .then(respuesta=> setData(respuesta))
            .catch((err)=> console.log(err))
            .finally(()=>setLoading(false))                             
        } else {
            task()  
            .then(respuesta=> setData(respuesta))
            .catch((err)=> console.log(err))
            .finally(()=>setLoading(false))                 
        }
    }, [id])

    

  
  //  useEffect(() => {
    //  task
      //.then(resp => setData(resp))
      //.catch(err => console.log(err))
      
    //}, [])
    

 

  return (
    <div>
    <div>{saludar}</div>
    <div style={{ display: 'flex', flexDirection:'row' , flexWrap:'wrap'}}>
    <ItemList data={data}/>
    </div>
    </div>
  )
}

export default ItemListContainer