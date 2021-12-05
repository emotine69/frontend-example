import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Cart from '../pages/Cart';
import Product from '../pages/Product';
import Login from '../components/Login';
import { AuthProvider } from '../contexts/AuthContext';
import PrivateRoute from '../components/PrivateRoute';
import Profile from '../components/Profile';
import SignUp from '../components/SignUp';
import ForgotPassword from '../components/ForgotPassword';
import UpdateProfile from '../components/UpdateProfile';

const Routers = () => {
  return (
    <AuthProvider>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/catalog/:slug" component={Product} />
        <Route path="/catalog" component={Catalog} />
        <Route path="/cart" component={Cart} />
        <PrivateRoute exact path="/profile" component={Profile} />
        <PrivateRoute exact path="/update-profile" component={UpdateProfile} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/forgot-password" component={ForgotPassword} />
      </Switch>
    </AuthProvider>
  );
};

export default Routers;
