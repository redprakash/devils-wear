//import { useContext } from "react";
import { Container, Row } from "react-bootstrap";
//import { CartBadgeCountContext } from "../../context/CartBadgeCountContext";
import ProductCard from "../ProductCard";
import { useEffect, useState, useContext } from "react";
import { DevilCart } from "../../context/CartProvider";

const Cart = () => {
  //const { cartCount } = useContext(CartBadgeCountContext);
  const [total, setTotal] = useState("");
  const { cart } = useContext(DevilCart);

  useEffect(() => {
    setTotal(cart.reduce((acc, current) => acc + Number(current.price), 0));
  }, [cart]);

  return (
    <div>
      <Container>
        {cart.length === 0 ? (
          <h1>Your Cart is Empty</h1>
        ) : (
          <h1>
            {cart.length > 1
              ? "You have " + cart.length + " Items Total is $" + total
              : "You have " + cart.length + " Item Total is $" + total}
          </h1>
        )}

        <Row>
          {cart.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Cart;
