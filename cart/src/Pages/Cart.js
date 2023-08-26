import Styles from '../Styels/Cart.module.css';
function Cart(params) {
   return(
    <>
   <div className={Styles.cartOuter}>
      <div>
         <div>
            <div>
              <input type="checkbox" />
              

            </div>
            <div>
               max 25
            </div>
         </div>
      </div>
    </div>
    </>
   ); 
}
export default Cart;