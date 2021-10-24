import { Carousel, Image, Container, ProgressBar } from 'react-bootstrap';
import { getFeaturedProduct } from '../../services/products';
import { useState, useEffect } from 'react';
const FeaturedList = () => {
  const [featuredProducts, setFeaturedProducts] = useState(null);
  useEffect(() => {
    const allFeaturedProducts = async () => {
      const data = await getFeaturedProduct();
      setFeaturedProducts(data);
    };
    allFeaturedProducts();
  }, []);
  if (!featuredProducts) {
    return (
      <Container className="ContainerBorder p-3">
        <ProgressBar striped variant="danger" now={80} />
      </Container>
    );
  }

  return (
    <Carousel fade>
      {featuredProducts.map((featuredProduct) => (
        <Carousel.Item key={featuredProduct.id}>
          <Image
            className="d-block w-75"
            src={featuredProduct.imageurl}
            alt={featuredProduct.title}
            fluid
          />
          <Carousel.Caption className="Desc">
            <h3>{featuredProduct.title}</h3>
            <p>{featuredProduct.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default FeaturedList;
