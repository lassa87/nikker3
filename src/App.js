import React from 'react';
import Home from './pages/Home'
import Products from './pages/Products'
import Contact from './pages/Contact'
import Onama from './pages/Onama'
import Ormarici from './pages/Ormarici'
import Vertikale from './pages/Vertikale'
import Ogledala from './pages/Ogledala'
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
            <Route path="/Ormarici" component={Ormarici} />
            <Route path="/Vertikale" component={Vertikale} />
            <Route path="/Ogledala" component={Ogledala} />
            <Route path="/Contact" component={Contact} />
            <Route path="/Onama" component={Onama} />
            <Route path="/productDetail" component={productDetail} />
          </Switch>
        </div>
      </Router>
    </ProductProvider>
  );
}

export default App;
