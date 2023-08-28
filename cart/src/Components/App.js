import React,{useState} from 'react';
import {Route,Routes, json} from 'react-router-dom';
import Navbar from "./Navbar";
import Home from "../Pages/Home";
import Cart from '../Pages/Cart'
import AddProduct from '../Pages/AddProducts';
import { productFromDB } from '../api';
import ShowProduct from '../Pages/ShowProduct';
import { ADD_PRODUCTS, addProducts } from '../Action';
class App extends React.Component{

  componentDidMount(){
    
    const {store} = this.props;
   
 //fetching api
 fetch('https://fakestoreapi.com/products')
 .then(res => res.json())
 .then(json => {
   // Now the newProduct array contains the fetched data
    //dispatch
    const arr = [...json];
    const newArr = arr.map(item =>{
      return{
        ...item,
        qty:0
      }
    })
   console.log("newarr",newArr);
store.dispatch(addProducts(newArr))
 })
 .catch(error => {
   console.error('Error fetching data:', error);
 });
 //subcribe
store.subscribe(()=>{
  console.log("updated!");
  console.log(this.props.store.getState());
  this.forceUpdate();

})



 }

  render(){
 
    
  return(
  
  <>
  <Navbar/>
  <Routes>
  <Route path="/" element={<Home store={this.props.store}/>} />
  <Route path="/addproduct" element={<AddProduct />} />
  <Route path="/cart" element={<Cart store={this.props.store} />} />
  <Route path="/product/:id" element={<ShowProduct dispatch={this.props.store.dispatch}/>} />
  </Routes>
  </>
 
    );
}
}

export default App;
