import React,{useState} from 'react';
import {Route,Routes} from 'react-router-dom';
import Navbar from "./Navbar";
import Home from "../Pages/Home";
import Cart from '../Pages/Cart';
import { useEffect } from 'react';
import ShowProduct from '../Pages/ShowProduct';
import ReturnOrderPage from '../Pages/ReturnOrderPage';
import SignupPage from './Auth/SignupPage';
import LoginPage from './Auth/LoginPage';
import Topnav from './TopNav';
import ForgotPassword from './Auth/ForgotPassword';
import { getAuth,onAuthStateChanged } from 'firebase/auth';
import { useSelector,useDispatch } from 'react-redux';
import { login, logout } from '../Redux/Reducer/authSlice';

function App(){
  let currentUser = useSelector((state) => state.auth);
  let dispatch = useDispatch();
  const auth = getAuth();
 
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
       
        const uid = user.uid;
        dispatch(login(user));
        // ...
        console.log("uid", uid);
      } else {
        // User is signed out
        // ...
        console.log("user is logged out");
        dispatch(logout());
      }
    });
  
    // Return a cleanup function that unsubscribes from the listener
    return () => unsubscribe();
  }, []);
  



  return(
  
  <>
  <Topnav/>
  <Navbar />
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path='/signup' element={<SignupPage/>} />
  <Route path='/forgotPassword' element={<ForgotPassword/>} />
  <Route path='/login' element={<LoginPage/>} />
  <Route path="/cart" element={<Cart />}/>
  <Route path="/return" element={<ReturnOrderPage/>} />
  <Route path="/product/:id" element={<ShowProduct />} />
  </Routes>

  </>
 
  )

}

export default App;
