import ItemCount from "../ItemCount/ItemCount"


const ItemListContainer = ( { saludar } ) => {
  return (
    <>
    <div>{saludar}</div>
    <ItemCount stock={5} initial={1}/>
    </>
  )
}

export default ItemListContainer