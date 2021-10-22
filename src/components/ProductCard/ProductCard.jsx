import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  ListGroupItem,
  Button,
} from 'react-bootstrap';
const ProductCard = () => {
  return (
    <Container>
      <Row>
        <Col className="mt-4">
          <Card style={{ width: '18rem' }}>
            <Card.Img
              variant="top"
              src="https://images.footballfanatics.com/manchester-united/manchester-united-home-authentic-shirt-2021-22_ss4_p-12052589+u-1gid25ezmt9zuw6jbhp4+v-84cfb229c6a04d2e8fe2e1a2ef40c96f.jpg?_hv=1&w=340"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <ListGroupItem>AUD 200</ListGroupItem>
            <ListGroup className="list-group-flush">
              <ListGroupItem>
                <Button variant="dark">Add to Cart</Button>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
        <Col className="mt-4">
          <Card style={{ width: '18rem' }}>
            <Card.Img
              variant="top"
              src="https://images.footballfanatics.com/manchester-united/manchester-united-away-authentic-shirt-2021-22_ss4_p-12052583+u-r3h1pxgyqgsv7motzm5u+v-2cf4a200725e44c3954600d02455879f.jpg?_hv=1&w=340"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <ListGroupItem>AUD 200</ListGroupItem>
            <ListGroup className="list-group-flush">
              <ListGroupItem>
                <Button variant="dark">Add to Cart</Button>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
        <Col className="mt-4">
          <Card style={{ width: '18rem' }}>
            <Card.Img
              variant="top"
              src="https://images.footballfanatics.com/manchester-united/manchester-united-third-authentic-shirt-2021-22_ss4_p-12052538+u-1aooy3q7al8uxclbkfmk+v-91f0ef21eaf94ebd835268ab1117c646.jpg?_hv=1&w=340"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <ListGroupItem>AUD 200</ListGroupItem>
            <ListGroup className="list-group-flush">
              <ListGroupItem>
                <Button variant="dark">Add to Cart</Button>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
        <Col className="mt-4">
          <Card style={{ width: '18rem' }}>
            <Card.Img
              variant="top"
              src="https://images.footballfanatics.com/manchester-united/manchester-united-home-goalkeeper-shirt-2021-22_ss4_p-12052534+u-13di054spowzypp38az2+v-b381e8435e6144408d5456b56a0aea14.jpg?_hv=1&w=340"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <ListGroupItem>AUD 200</ListGroupItem>
            <ListGroup className="list-group-flush">
              <ListGroupItem>
                <Button variant="dark">Add to Cart</Button>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
        <Col className="mt-4">
          <Card style={{ width: '18rem' }}>
            <Card.Img
              variant="top"
              src="https://images.footballfanatics.com/manchester-united/manchester-united-1994-home-shirt_ss4_p-12005512+u-5bbporii266cb0y9tsyi+v-8e8f68f68c3347e28c7825b40bab7359.jpg?_hv=1&w=340"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <ListGroupItem>AUD 200</ListGroupItem>
            <ListGroup className="list-group-flush">
              <ListGroupItem>
                <Button variant="dark">Add to Cart</Button>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>

        <Col className="mt-4">
          <Card style={{ width: '18rem' }}>
            <Card.Img
              variant="top"
              src="https://images.footballfanatics.com/manchester-united/manchester-united-zne-anthem-jacket-black_ss4_p-12053221+u-yn82qgtmo7xo74jyx1f8+v-47f31a91383d4180979e889a7c0d247e.jpg?_hv=1&w=340"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <ListGroupItem>AUD 200</ListGroupItem>
            <ListGroup className="list-group-flush">
              <ListGroupItem>
                <Button variant="dark">Add to Cart</Button>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>

        <Col className="mt-4">
          <Card style={{ width: '18rem' }}>
            <Card.Img
              variant="top"
              src="https://images.footballfanatics.com/manchester-united/manchester-united-training-top-black-womens_ss4_p-12052554+u-12mlk391k0ls1u6rpecq+v-64f953af05e1424aa44b8d831099c522.jpg?_hv=1&w=340"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <ListGroupItem>AUD 200</ListGroupItem>
            <ListGroup className="list-group-flush">
              <ListGroupItem>
                <Button variant="dark">Add to Cart</Button>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductCard;
