import { Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCart";
import cartItems from "../data/items.json";

type cartItemsProps = {
    id: number;
    qty: number;
}

export const CartItem = ({id, qty} : cartItemsProps) => {

    const {remove} = useShoppingCart()
    const items = cartItems.find(i => i.id === id);

    if(items == null ) return null
  return (
   <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
        <img src={items.imgUrl} style={{height: '75px', width: '125px', objectFit: 'cover'}}/>
        <div className="me-auto">
            <div>
                {items.name} {qty > 1 && <span className="text-muted" style={{fontSize: '.80rem'}}>x{qty}</span>}
            </div>
        </div>
   </Stack>
  )
}
