import React from 'react';
import ProductsList from '../../containers/ProductsList';
import Featured from '../Featured';
const Home = () => {
  return (
    <>
      <Featured />
      <ProductsList />
    </>
  );
};

export default Home;
