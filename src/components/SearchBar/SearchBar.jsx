import { Form, FormControl, Button } from 'react-bootstrap';
import { SearchContext } from '../../context/SearchContext';
import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
const SearchBar = () => {
  const [currentInput, setCurrentInput] = useState('');
  const { setSearch } = useContext(SearchContext);
  const history = useHistory();

  const handleChange = (e) => {
    setCurrentInput(e.target.value);
  };

  const keydown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (currentInput === '') {
        alert('Please type Something');
      } else {
        setSearch(currentInput);
        history.push('/searchresults');
        setCurrentInput('');
      }
    }
  };
  const handleClick = (event) => {
    event.preventDefault();
    if (currentInput === '') {
      alert('Please type Something');
    } else {
      setSearch(currentInput);
      history.push('/searchresults');
      setCurrentInput('');
    }
  };
  return (
    <div>
      <Form className="d-flex" onKeyDown={keydown}>
        <FormControl
          type="search"
          placeholder="Search"
          aria-label="Search"
          className="FormControl"
          value={currentInput}
          onChange={handleChange}
        />
        <Button className="SearchBtn" onClick={handleClick}>
          Search
        </Button>
      </Form>
    </div>
  );
};

export default SearchBar;
