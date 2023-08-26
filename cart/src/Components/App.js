import React,{useState} from 'react';
import {Route,Routes, json} from 'react-router-dom';
import Navbar from "./Navbar";
import Home from "../Pages/Home";
import Cart from '../Pages/Cart'
import AddProduct from '../Pages/AddProducts';
import { productFromDB } from '../api';
class App extends React.Component{

  componentDidMount(){
    let newProduct = [];
    const {store} = this.props;
   
 //fetching api
 fetch('https://fakestoreapi.com/products')
 .then(res => res.json())
 .then(json => {
   // Now the newProduct array contains the fetched data
    //dispatch
store.dispatch({
  type:'ADD_PRODUCT',
  product: json
})
 })
 .catch(error => {
   console.error('Error fetching data:', error);
 });
 //subcribe
store.subscribe(()=>{
  console.log("updated!");
  
  this.forceUpdate();

})


 }

  render(){
    
    
  return(
  
  <>
  <Navbar/>
  <Routes>
  <Route path="/" element={<Home products={this.props.store.getState()}/>} />
  <Route path="/addproduct" element={<AddProduct />} />
  <Route path="/cart" element={<Cart />} />
  </Routes>
  </>
 
    );
}
}

export default App;
