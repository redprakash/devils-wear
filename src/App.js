import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./components/Navigation";

import Footer from "./components/Footer";
import Routes from "./containers/Routes/Routes";
import SearchProvider from "./context/SearchContext";
//import CartBadgeCountProvider from "./context/CartBadgeCountContext";
import CartProvider from "./context/CartProvider";

function App() {
  return (
    <div>
      <CartProvider>
        <SearchProvider>
          <Router>
            <Navigation />
            <Routes />
          </Router>
        </SearchProvider>
      </CartProvider>
      <Footer />
    </div>
  );
}

export default App;
