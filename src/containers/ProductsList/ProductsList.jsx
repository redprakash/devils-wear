import ProductCard from "../../components/ProductCard";
import { getProducts } from "../../services/products";
import { Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  const allProducts = async () => {
    const data = await getProducts();
    setProducts(data);
  };
  useEffect(() => allProducts(), []);

  return (
    <section fluid="true" className="bg-light p-3">
      <Container>
        <Row>
          <h4>All Products</h4>

          {products &&
            products.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
        </Row>
      </Container>
    </section>
  );
};

export default ProductsList;
