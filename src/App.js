import React from 'react';
import Home from './pages/Home'
import Products from './pages/Products'
import Contact from './pages/Contact'
import productDetail from './pages/productDetail'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ProductProvider } from './components/ProductProvider'

function App() {
  return (
    <ProductProvider>
      <Router>
        <div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Products" component={Products} />
            <Route path="/Contact" component={Contact} />
            <Route path="/productDetail" component={productDetail} />
          </Switch>
        </div>
      </Router>
    </ProductProvider>
  );
}

export default App;
