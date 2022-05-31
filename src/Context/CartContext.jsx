import { createContext, useContext, useState } from 'react'

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

const CartContextProv =({children}) =>{

    const [cartList, setCartList] = useState([])
    

    function addToCart(item){
        const i = cartList.findIndex(e => e.id === item.id)
        if (i !== -1){
            const newCartList = cartList[i].cantidad
            cartList[i].cantidad += newCartList
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
        return cartList.reduce((counter, e) => counter += e.cantidad , 0)

    }

    const totalPrice = () => {
        return cartList.reduce((counter, e) => counter +  (e.cantidad * e.price) , 0)

    }

    const clearCart = () => {
        setCartList ([])
    } 



console.log(cartList)
    return (
        <CartContext.Provider value= { { 
            cartList,
            addToCart,
            clearCart,
            totalCount,
            totalPrice,
            removeItem,


        } } > 
            {children}
        
        </CartContext.Provider> 
    )
}

export default CartContextProv