import { Form, FormControl, Button } from 'react-bootstrap';
import { SearchContext } from '../../context/SearchContext';
import { useState, useContext } from 'react';
const SearchBar = () => {
  const [currentInput, setCurrentInput] = useState('');
  const { setSearch } = useContext(SearchContext);
  const handleChange = (e) => {
    setCurrentInput(e.target.value);
  };
  const handleClick = () => {
    setSearch(currentInput);
    setCurrentInput('');
  };
  return (
    <div>
      <Form onSubmit={(e) => e.preventDefault()} className="d-flex">
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
