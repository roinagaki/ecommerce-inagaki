import { createContext, useContext, useState } from 'react'
import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from 'firebase/firestore'
import swal from 'sweetalert'

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

const CartContextProv =({children}) =>{

    const [cartList, setCartList] = useState([])
    const [buyer, setBuyer] = useState({
        name: "",
        email: "",
        emailConfirm: "",
        lastName: "",
       
      });
    

    function addToCart(item){
        const i = cartList.findIndex(e => e.id === item.id)
        if (i !== -1){
            const newCartList = cartList[i].quantity
            cartList[i].quantity += newCartList
            setCartList( [ ...cartList ] )
        } else { 
        setCartList( [
            ...cartList,
            item
        ] )
    }
} 

    const removeItem =(id) =>{
        setCartList(cartList.filter( e => e.id !== id ))
    }

    const totalCount = () => {
        return cartList.reduce((counter, e) => counter += e.quantity , 0)

    }

    const totalPrice = () => {
        return cartList.reduce((counter, e) => counter +  (e.quantity * e.price) , 0)

    }

    const clearCart = () => {
        setCartList ([])
    } 

    function createOrder() {
        let order = {}
        
        order.buyer = {buyer};
        order.total = totalPrice();
        order.items = cartList.map(cartList => {
            const id = cartList.id;
            const name = cartList.name;
            const quantity = cartList.quantity;
            const price = cartList.price * cartList.quantity;
            return {id, name, quantity, price}
        });
    
        async function updateStocks() {
            
                const queryCollectionStocks = collection(db, 'items');
                const queryUpdateStocks = query(queryCollectionStocks, where(documentId(), 'in', cartList.map(item => item.id)));
                const batch = writeBatch(db);
        
                await getDocs(queryUpdateStocks)
                .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
                stock: res.data().stock - cartList.find(item => item.id === res.id).quantity
            }) ))
                .finally(()=> console.log('actulalizado'))

        batch.commit()

            }
            
        
    
    const db = getFirestore()
    const queryCollectionOrders = collection(db, 'orders')
    addDoc(queryCollectionOrders, order)
    .then(resp => swal({ 
          title: `Gracias por su compra !`,
          text: "Su número de orden es " + resp.id,
          icon: "success",
        }))
    .then(() => updateStocks())
    .catch(err=> console.log(err))
    .finally(() => clearCart())   
    
    
}

    return (
        <CartContext.Provider value= { { 
            cartList,
            addToCart,
            clearCart,
            totalCount,
            totalPrice,
            removeItem,
            createOrder


        } } > 
            {children}
        
        </CartContext.Provider> 
    )
}

export default CartContextProv