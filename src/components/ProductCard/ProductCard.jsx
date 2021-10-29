import { Col, Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
  BsFillCartPlusFill,
  BsSuitHeart,
  BsSuitHeartFill,
} from 'react-icons/bs';
import { CartBadgeCountContext } from '../../context/CartBadgeCountContext';
import { useContext } from 'react';
import './ProductCard.scss';
import { useState } from 'react';
const ProductCard = ({ product }) => {
  const { handleClick } = useContext(CartBadgeCountContext);
  const [favDefault, setfavDefault] = useState(true);
  const favClick = () => {
    setfavDefault(!favDefault);
  };

  return (
    <Col className="mt-4">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={product.imageurl} alt={product.title} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem className="d-flex justify-content-between">
            <ListGroupItem>AUD {product.price}</ListGroupItem>
            <Button variant="outline-warning" onClick={favClick}>
              {favDefault ? (
                <BsSuitHeart className="Fav" />
              ) : (
                <BsSuitHeartFill className="Fav" />
              )}
            </Button>
            <Button variant="dark" onClick={handleClick}>
              <BsFillCartPlusFill />
            </Button>
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
