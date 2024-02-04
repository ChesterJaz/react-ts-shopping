import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCart";
import { CartItem } from "./CartItem";
import { CurrencyFormat } from "../utils/CurrencyFormat";
import cartItemss from "../data/items.json";
type ShoppingCartProps = {
  isOpen: boolean;
};

export const ShoppingCart = ({ isOpen }: ShoppingCartProps) => {
  const { closeCart, cartItems } = useShoppingCart();
  return (
    <Offcanvas show={isOpen} placement="end" onHide={closeCart}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map(item => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total {CurrencyFormat(cartItems.reduce((total, cartItem) => {
                 const items = cartItemss.find(i => i.id === cartItem.id);

                 return total + (items?.price || 0 ) * cartItem.qty
            }, 0))}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};
