import React from 'react';
import Home from './pages/Home'
import Products from './pages/Products'
import Contact from './pages/Contact'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Products" component={Products} />
          <Route path="/Contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
