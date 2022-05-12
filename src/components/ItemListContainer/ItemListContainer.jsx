import { useEffect, useState } from "react"
import { task } from "../../productos"
import ItemList from "../ItemList/ItemList"



const ItemListContainer = ( { saludar } ) => {
  const [data, setData] = useState([]);
  
  
  useEffect(() => {
    task
    .then(resp => setData(resp))
    .catch(err => console.log(err))
    
  }, [])
   
  // setData(resp.find(item => item.id === "1"))
 

  return (
    <>
    <div>{saludar}</div>
    <ItemList data={data}/>
    </>
  )
}

export default ItemListContainer