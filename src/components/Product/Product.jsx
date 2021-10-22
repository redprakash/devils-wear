import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import styles from './Product.module.scss';

const Product = () => {
  const { id } = useParams();
  console.log({ id });

  return (
    <Container className={styles.ContainerBorder}>
      <h1>This will be details of individual Kit</h1>
    </Container>
  );
};

export default Product;
