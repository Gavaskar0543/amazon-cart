import {Route,Routes} from 'react-router-dom';
import Navbar from "./Navbar";
import Home from "../Pages/Home";
import Cart from '../Pages/Cart'
import AddProduct from '../Pages/AddProducts';
function App() {
  return(
  
  <>
  <Navbar/>
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/addproduct" element={<AddProduct />} />
  <Route path="/cart" element={<Cart />} />
  </Routes>
  </>
 
    );
}

export default App;
