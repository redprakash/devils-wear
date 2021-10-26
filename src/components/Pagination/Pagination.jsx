import React from 'react';

const Pagination = ({ posts, loading }) => {
  if (loading) {
    return <h4>Loading</h4>;
  }
  return <div></div>;
};

export default Pagination;
