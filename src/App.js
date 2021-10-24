import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './components/Navigation';

import Footer from './components/Footer';
import Routes from './containers/Routes/Routes';
import SearchProvider from './context/SearchContext';

function App() {
  return (
    <SearchProvider>
      <Router>
        <Navigation />
        <Routes />
      </Router>
      <Footer />
    </SearchProvider>
  );
}

export default App;
