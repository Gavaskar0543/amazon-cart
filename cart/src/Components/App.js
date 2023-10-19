import React,{useState} from 'react';
import {Route,Routes} from 'react-router-dom';
import Navbar from "./Navbar";
import Home from "../Pages/Home";
import Cart from '../Pages/Cart';
import Footer from '../Components/Footer';
import ShowProduct from '../Pages/ShowProduct';
import ReturnOrderPage from '../Pages/ReturnOrderPage';
import Topnav from './TopNav';
class App extends React.Component{

 

  render(){
 
    
  return(
  
  <>
  <Topnav/>
  <Navbar store={this.props.store}/>
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/cart" element={<Cart />}/>
  <Route path="/return" element={<ReturnOrderPage/>} />
  <Route path="/product/:id" element={<ShowProduct />} />
  </Routes>
  <Footer/>
  </>
 
    );
}
}

export default App;
