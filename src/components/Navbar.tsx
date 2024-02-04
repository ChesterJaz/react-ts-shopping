import { Button, Container, Nav, Navbar as NavbarBS} from "react-bootstrap"
import { NavLink } from "react-router-dom"
import CartIcon from "../img/cart.svg";
import { useShoppingCart } from "../context/ShoppingCart";

export const Navbar = () => {
  const {openCart, cartQuantity} = useShoppingCart()
  return (
    <NavbarBS sticky="top" className="bg-white shadow-sm mb-3">
        <Container>
            <Nav className="me-auto mr-2">
               <Nav.Link to={'/'} as={NavLink}>Home</Nav.Link>
               <Nav.Link to={'/store'} as={NavLink}>Store</Nav.Link>
               <Nav.Link to={'/about'} as={NavLink}>About</Nav.Link>
            </Nav>
        <Button 
        onClick={openCart}
        style={{ width:"3rem", height:"3rem", borderColor: 'gray', position: 'relative', borderRadius: 15}}
        className="btn btn-light"><img src={CartIcon} height={20} width={20} color="white"/>
        <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center" style={{color:'white', width:"1.5rem", height: "1.5rem", position: 'absolute', left: 34}}>{cartQuantity}</div>
        </Button>
        </Container>
    </NavbarBS>
  )
}
