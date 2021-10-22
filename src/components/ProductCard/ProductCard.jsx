import { Col, Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const ProductCard = ({ product }) => {
  return (
    <Col className="mt-4">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={product.imageurl} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
        </Card.Body>
        <ListGroupItem>AUD {product.price}</ListGroupItem>
        <ListGroup className="list-group-flush">
          <ListGroupItem>
            <Button variant="dark">Add to Cart</Button>
          </ListGroupItem>
          <ListGroupItem>
            <Link as={Link} to={`product/${product.id}`}>
              <Button variant="danger">Details</Button>
            </Link>
          </ListGroupItem>
        </ListGroup>
      </Card>
    </Col>
  );
};

export default ProductCard;
