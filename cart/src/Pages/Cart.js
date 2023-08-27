import Styles from '../Styels/Cart.module.css';
function Cart({store}) {
   const{cartList} = store.getState();
   console.log(cartList)
   return(
    <>
    { cartList.map(item => 
      <h1>{item.title}</h1>
     
    )}
    </>
   ); 
}
export default Cart;