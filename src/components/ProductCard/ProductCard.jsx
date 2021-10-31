import { Col, Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  BsFillCartPlusFill,
  BsFillCartDashFill,
  BsSuitHeart,
  BsSuitHeartFill,
} from "react-icons/bs";
import "./ProductCard.scss";
import { useState, useContext } from "react";
import { DevilCart } from "../../context/CartProvider";
const ProductCard = ({ product }) => {
  const { cart, setCart } = useContext(DevilCart);
  const handleAddCartClick = () => {
    setCart([...cart, product]);
  };

  const handleRemoveCartClick = () => {
    setCart(cart.filter((cartId) => cartId.id !== product.id));
  };
  const [favDefault, setfavDefault] = useState(true);
  const favClick = () => {
    setfavDefault(!favDefault);
  };
  console.log(cart);
  console.log(product);
  return (
    <Col className="mt-4">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={product.imageurl} alt={product.title} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem className="d-flex justify-content-between">
            <ListGroupItem>AUD {product.price}</ListGroupItem>

            {favDefault ? (
              <Button variant="outline-warning" onClick={favClick}>
                <BsSuitHeart className="Fav" />
              </Button>
            ) : (
              <Button variant="outline-warning" onClick={favClick}>
                <BsSuitHeartFill className="Fav" />
              </Button>
            )}
            {cart.includes(product) ? (
              <Button variant="danger" onClick={handleRemoveCartClick}>
                <BsFillCartDashFill />
              </Button>
            ) : (
              <Button variant="dark" onClick={handleAddCartClick}>
                <BsFillCartPlusFill />
              </Button>
            )}
          </ListGroupItem>
          <ListGroupItem>
            <Link as={Link} to={`product/${product.id}`}>
              <Button variant="warning">Details</Button>
            </Link>
          </ListGroupItem>
        </ListGroup>
      </Card>
    </Col>
  );
};

export default ProductCard;
