import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Products from "./pages/product/Products";
import Shopping from "./pages/shopping/Shopping";
import Home from "./pages/home/Home";
import Carts from './pages/CartList/Carts';
import HomeAdmin from './pages/Admin/HomeAdmin/HomeAdmin';
import Category from './pages/Admin/Category/Category';
import Product from './pages/Admin/Product/Product';
import Login from './pages/Login/Login';
import { useSelector } from 'react-redux';

function ProtectedRoute(props) {
  const { isLogin } = useSelector(state => state.authReducer)

  if (!isLogin) {
    return <Redirect to="/login" />
  }

  return <Route {...props} />

}

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/product/:id" component={Products} />
        <Route path="/shopping" component={Shopping} />
        <Route path="/carts" component={Carts} />
        <ProtectedRoute exact path="/admin" component={HomeAdmin} />
        <ProtectedRoute path="/admin/category" component={Category} />
        <ProtectedRoute path="/admin/product" component={Product} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
