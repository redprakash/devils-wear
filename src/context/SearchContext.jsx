import { createContext, useState } from 'react';
export const SearchContext = createContext();
const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState('');
  const searchData = { search, setSearch };

  return (
    <SearchContext.Provider value={searchData}>
      {children}
    </SearchContext.Provider>
  );
};
export default SearchProvider;
