import './Navigation.scss';
import {
  Nav,
  Navbar,
  Container,
  Button,
  Badge,
  OverlayTrigger,
  Tooltip,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import { BsFillCartFill } from 'react-icons/bs';
const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="md" className="Menu" variant="dark">
      <Container>
        <Navbar.Brand href="/">Devil's Wear</Navbar.Brand>

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
                Total Items in <strong>Cart</strong>
              </Tooltip>
            }
          >
            <Nav.Link as={Link} to="#">
              <Button variant="warning" className="d-flex">
                <BsFillCartFill className="Cart" />
                <Badge bg="dark">4</Badge>
                <span className="visually-hidden">Total Items in Cart</span>
              </Button>
            </Nav.Link>
          </OverlayTrigger>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
