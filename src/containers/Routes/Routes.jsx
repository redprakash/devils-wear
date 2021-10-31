import About from "../../components/About";
import Home from "../../components/Home";
import Cart from "../../components/Cart";
import Product from "../../components/Product";
import SearchResults from "../../components/SearchResults";
import ProductsList from "../../containers/ProductsList";
import { Route, Switch } from "react-router-dom";

const Routes = () => {
  const routes = [
    {
      path: "/",
      exact: true,
      component: Home,
    },
    {
      path: "/devils-wear",
      exact: true,
      component: Home,
    },
    {
      path: "/product/:id",
      component: Product,
    },
    {
      path: "/products",
      component: ProductsList,
    },
    {
      path: "/about",
      component: About,
    },
    {
      path: "/searchresults",
      component: SearchResults,
    },
    {
      path: "/cart",
      component: Cart,
    },
  ];

  return (
    <div>
      <Switch>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} exact={route.exact}>
            <route.component />
          </Route>
        ))}
        {/* <Route exact path="/">
          <Home />
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/products">
          <ProductsList />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/searchresults">
          <SearchResults />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route> */}
      </Switch>
    </div>
  );
};

export default Routes;
