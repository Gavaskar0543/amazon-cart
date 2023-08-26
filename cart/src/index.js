import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {createStore} from 'redux';
import ReactDOM from 'react-dom/client';
import products from './Reducers';
import App from './Components/App';
const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(products);
root.render(
  <React.StrictMode>
    <Router>
    <App store={store} />
    </Router>
  </React.StrictMode>
);
