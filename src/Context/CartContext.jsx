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

    const clearCart = () => {
        setCartList ([])
    } 

console.log(cartList)
    return (
        <CartContext.Provider value= { { 
            cartList,
            addToCart,
            clearCart

        } } > 
            {children}
        
        </CartContext.Provider> 
    )
}

export default CartContextProv