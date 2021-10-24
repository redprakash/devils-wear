import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { findProduct } from '../../services/products';
import { ProgressBar, Button, Image } from 'react-bootstrap';
import './Product.scss';

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const getProduct = async () => {
      const data = await findProduct(id);
      setProduct(data);
    };
    getProduct();
  }, [id, setProduct]);
  if (!product) {
    return (
      <Container className="ContainerBorder p-3">
        <ProgressBar striped variant="danger" now={80} />
      </Container>
    );
  }
  return (
    <Container className="ProductContainer p-2">
      <div className="ProductContainer_Left">
        <h1 className="ProductContainer_Header">{product.title}</h1>
        <h4>Price : Aud {product.price}</h4>
        <h4>{product.description}</h4>
        <h4>Size: {product.size}</h4>
        <h5>Available : {product.quantity}</h5>

        <Button variant="dark">Buy Now</Button>
      </div>
      <div className="ProductContainer_Right">
        <Image src={product.imageurl} alt={product.title} fluid />
      </div>
    </Container>
  );
};

export default Product;
