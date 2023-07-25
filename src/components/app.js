import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/product/:productId" component={ProductDetails} />
      </Switch>
    </Router>
  );
};

export default App;
