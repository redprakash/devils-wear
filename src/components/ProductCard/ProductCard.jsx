import { Col, Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsFillCartPlusFill } from 'react-icons/bs';
import { CartBadgeCountContext } from '../../context/CartBadgeCountContext';
import { useContext } from 'react';
const ProductCard = ({ product }) => {
  const { handleClick } = useContext(CartBadgeCountContext);

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
