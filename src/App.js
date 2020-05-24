import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Shop from './components/Shop';
import Cart from './components/Cart';

import './App.css';
import { Provider } from 'react-redux';
import store from './store.js'
import { BrowserRouter, Route, Switch } from 'react-router-dom' // allow connecting multi-page in react app

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/shop" component={Shop} />
            <Route path="/cart" component={Cart} />
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
