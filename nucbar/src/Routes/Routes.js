import { v4 as uuidv4 } from 'uuid';
import Home from '../Pages/Home/Home.jsx';
import Login from '../Components/Login/Login';
import NotFound from '../Pages/NotFound/NotFound.jsx';
import Products from '../Pages/Products/Products.jsx';
import Product from '../Pages/Product/Product.jsx';
import ShoppingCart from '../Pages/ShoppingCart/ShoppingCart.jsx';
export const publicRoutes = [
  {
    id: uuidv4(),
    exact: true,
    path: '/',
    component: <Home />,
  },
  {
    id: uuidv4(),
    exact: false,
    path: '/login',
    component: <Login />,
  },
  {
    id: uuidv4(),
    exact: false,
    path: '/products/:category',
    component: <Products />,
  },
  {
    id: uuidv4(),
    exact: false,
    path: '/product/:id',
    component: <Product />,
  },
  {
    id: uuidv4(),
    exact: false,
    path: '/cartssss',
    component: <ShoppingCart />,
  },

  {
    id: uuidv4(),
    exact: false,
    path: '*',
    component: <NotFound />,
  },
];
