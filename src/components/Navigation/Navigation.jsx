import "./Navigation.scss";
import SearchBar from "../SearchBar/SearchBar";
import {
  Nav,
  Navbar,
  Container,
  Button,
  Badge,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { DevilCart } from "../../context/CartProvider";
import { useContext } from "react";
const Navigation = () => {
  const { cart } = useContext(DevilCart);
  return (
    <Navbar collapseOnSelect expand="md" className="Menu" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Devil's Wear
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto ">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>

            <Nav.Link as={Link} to="/products">
              Products
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
          </Nav>
          <SearchBar />
          <OverlayTrigger
            placement="bottom"
            overlay={
              <Tooltip>
                My <strong>Cart</strong>
              </Tooltip>
            }
          >
            <Nav.Link as={Link} to="/cart">
              <Button variant="warning" className="d-flex">
                <BsFillCartFill className="Cart" />
                <Badge bg="dark">{cart.length}</Badge>
                <span className="visually-hidden">My Cart</span>
              </Button>
            </Nav.Link>
          </OverlayTrigger>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
