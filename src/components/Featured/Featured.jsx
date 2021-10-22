import styles from './Featured.module.scss';
import { Carousel, Container, Image } from 'react-bootstrap';
const Featured = () => {
  return (
    <section fluid="true" className={styles.FeaturedFull}>
      <Container>
        <Carousel fade>
          <Carousel.Item>
            <Image
              className="d-block"
              src="https://images.footballfanatics.com/manchester-united/manchester-united-home-shirt-2021-22-with-ronaldo-7-printing_ss4_p-12093042+u-oicxhbrseyxzlvk6sx92+v-be807a6e8fbf495fac17b4421e57f043.jpg?_hv=1&w=900"
              alt="Second slide"
              fluid
            />
            <Carousel.Caption className={styles.Desc}>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="d-block"
              src="https://images.footballfanatics.com/manchester-united/manchester-united-away-shirt-2021-22-kids_ss4_p-12052547+u-11d5qeoiu7aa40hdm741+v-610317aacad740379f0bd105a0c06e0b.jpg?_hv=1&w=900"
              alt="Third slide"
              fluid
            />

            <Carousel.Caption className={styles.Desc}>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </section>
  );
};

export default Featured;
