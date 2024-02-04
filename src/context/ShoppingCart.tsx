import { ReactNode, createContext, useContext, useState } from "react"

const ShoppingCartContext = createContext({} as ShoppingCartContext)

export const useShoppingCart = () => {
  return (
    useContext(ShoppingCartContext)
  )
}


type ShoppingCartContext = {
    getItemQty: (id: number) => number;
    increasetItemQty: (id: number) => void;
    decreaseItemQty: (id: number) => void;
    remove: (id: number) => void;
}


type ShoppingProviderProps = {
    children: ReactNode;
}

type Cart = {
    id: number;
    qty: number;
}


export const ShoppingProvider = ({children}: ShoppingProviderProps) => {

    const [cartItems, setCartItems] = useState<Cart[]>([])

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
        <ShoppingCartContext.Provider value = {{getItemQty, increasetItemQty, decreaseItemQty, remove}}>
            {children}
        </ShoppingCartContext.Provider>
    )
  }