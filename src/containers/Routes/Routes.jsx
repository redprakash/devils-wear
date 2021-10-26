import About from '../../components/About';
import Home from '../../components/Home/';
import Cart from '../../components/Cart';
import Product from '../../components/Product';
import ProductsList from '../../containers/ProductsList';
import { Route, Switch } from 'react-router-dom';
const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/product/:id',
    component: Product,
  },
  {
    path: '/products',
    component: ProductsList,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/cart',
    component: Cart,
  },
];
const Routes = () => {
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
          </Route> */}
      </Switch>
    </div>
  );
};

export default Routes;
