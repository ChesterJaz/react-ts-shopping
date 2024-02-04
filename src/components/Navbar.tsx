import { Button, Container, Nav, Navbar as NavbarBS} from "react-bootstrap"
import { NavLink } from "react-router-dom"
import CartIcon from "../img/cart.svg"

export const Navbar = () => {
  return (
    <NavbarBS className="bg-white shadow-sm mb-3">
        <Container>
            <Nav className="me-auto mr-2">
               <Nav.Link to={'/'} as={NavLink}>Home</Nav.Link>
               <Nav.Link to={'/store'} as={NavLink}>Store</Nav.Link>
               <Nav.Link to={'/about'} as={NavLink}>About</Nav.Link>
            </Nav>
        <Button><CartIcon/></Button>
        </Container>
    </NavbarBS>
  )
}
