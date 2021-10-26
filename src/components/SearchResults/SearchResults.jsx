import { useContext, useState, useEffect } from 'react';
import { Container, Row, ProgressBar } from 'react-bootstrap';
import { SearchContext } from '../../context/SearchContext';
import { getProducts } from '../../services/products';
import ProductCard from '../ProductCard';
const SearchResults = () => {
  const { search } = useContext(SearchContext);
  const [products, setProducts] = useState(null);
  useEffect(() => {
    const searchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };
    searchProducts();
  }, []);

  if (!products) {
    return (
      <Container className="ContainerBorder p-3">
        <ProgressBar striped variant="danger" now={80} />
      </Container>
    );
  }
  const results = products.filter(
    (product) =>
      product.title.toLowerCase().includes(search.toLowerCase()) ||
      product.description.toLowerCase().includes(search.toLowerCase())
  );
  if (results.length === 0) {
    return (
      <section fluid="true" className="bg-light p-3">
        <Container>
          <h1>Sorry nothing found for : {search}</h1>
        </Container>
      </section>
    );
  }

  return (
    <section fluid="true" className="bg-light p-3">
      <Container>
        {results.length === 0 ? (
          <h1>Sorry nothing found for :{search}</h1>
        ) : (
          <>
            <h1>Results for : {search}</h1>
            <Row>
              {results.map((product) => (
                <ProductCard product={product} key={product.id} />
              ))}
            </Row>
          </>
        )}
      </Container>
    </section>
  );
};

export default SearchResults;
