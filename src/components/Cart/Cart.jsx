import { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { CartBadgeCountContext } from '../../context/CartBadgeCountContext';
const Cart = () => {
  const { cartCount } = useContext(CartBadgeCountContext);
  return (
    <div>
      <Container>
        <h1>
          Your have {cartCount} {cartCount > 1 ? 'Items' : 'Item'}
        </h1>
      </Container>
    </div>
  );
};

export default Cart;
