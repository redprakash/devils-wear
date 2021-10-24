import './Featured.scss';
import { Container } from 'react-bootstrap';
import FeaturedList from '../../containers/FeaturedList/FeaturedList';
const Featured = () => {
  return (
    <section fluid="true" className="FeaturedFull">
      <Container>
        <FeaturedList />
      </Container>
    </section>
  );
};

export default Featured;
