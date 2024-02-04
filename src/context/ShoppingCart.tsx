import { ReactNode, createContext, useContext, useState } from "react"
import { ShoppingCart } from "../components/ShoppingCart"

const ShoppingCartContext = createContext({} as ShoppingCartContext)

export const useShoppingCart = () => {
  return (
    useContext(ShoppingCartContext)
  )
}


type ShoppingCartContext = {
    openCart: () => void;
    closeCart: () =>void;
    getItemQty: (id: number) => number;
    increasetItemQty: (id: number) => void;
    decreaseItemQty: (id: number) => void;
    remove: (id: number) => void;
    cartQuantity: number;
    cartItems: Cart[];
}


type ShoppingProviderProps = {
    children: ReactNode;
}

type Cart = {
    id: number;
    qty: number;
}


export const ShoppingProvider = ({children}: ShoppingProviderProps) => {

    const [isOpen, setOpen] = useState(false);
    const [cartItems, setCartItems] = useState<Cart[]>([]);


    const cartQuantity = cartItems.reduce(
        (quantity, item) => item.qty + quantity,
        0
      )

    const openCart = () => setOpen(true)
    const closeCart = () => setOpen(false)

    const getItemQty = (id:number) =>{
        return cartItems.find(item => item.id === id)?.qty || 0;
    }

    const increasetItemQty = (id:number) =>{
        setCartItems(currentItems => {
            if(currentItems.find(item => item.id ===id) == null) {
                return [...currentItems, {id, qty: 1}]
            } else {
                return currentItems.map(item =>{
                    if(item.id === id) {
                        return {...item, qty: item.qty + 1}
                    } else {
                        return item
                    }
                })
            }
        })
    }

    const decreaseItemQty = (id:number) =>{
        setCartItems(currentItems => {
            if(currentItems.find(item => item.id === id)?.qty === 1) {
                return currentItems.filter(item => item.id !== id)
            } else {
                return currentItems.map(item =>{
                    if(item.id === id) {
                        return {...item, qty: item.qty - 1}
                    } else {
                        return item
                    }
                })
            }
        })
    }

    const remove = (id:number) => {
        setCartItems(currentItems => {
            return currentItems.filter(item => item.id !== id)
        })
    }

    return (
        <ShoppingCartContext.Provider value = {{getItemQty, increasetItemQty, openCart, closeCart, decreaseItemQty, remove, cartItems, cartQuantity}}>
            {children}
            <ShoppingCart isOpen={isOpen}/>
        </ShoppingCartContext.Provider>
    )
  }