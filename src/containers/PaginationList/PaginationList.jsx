import { useState, useEffect } from 'react';
import { getProducts } from '../../services/products';
const PaginationList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(8);
  const allProducts = async () => {
    setLoading(true);
    const data = await getProducts();
    setPosts(data);
    setLoading(false);
  };
  useEffect(() => allProducts(), []);
  const indexOfLastPost = currentPage * perPage;
  const indexOfFirstPost = indexOfLastPost - perPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return <div></div>;
};

export default PaginationList;
