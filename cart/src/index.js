import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './Components/App';
import './index.css'
import { Provider } from 'react-redux';
import store from './Redux/store';
import app from './Config/firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(store)
root.render(
  <React.StrictMode>
    <Provider store={store} >
    <Router>
    <ToastContainer />
    <App  />
    </Router>
    </Provider>
  </React.StrictMode>
);
