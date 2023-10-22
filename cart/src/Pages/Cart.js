import { useEffect,useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Products from "../Components/Products";
function Cart({store}) {
  const [isEmpty,setEmpty] = useState(true);
  let cart = useSelector((state) => state.cart);
  useEffect(() => {
    if (cart.items.length > 0) {
      setEmpty(false);
    } else {
      setEmpty(true);
    }
  }, [cart.items]);

  return (
    <MainDiv>
      {isEmpty ? <h1 className="setCenter text-semibold">Your cart is empty &#x1F6D2;</h1> : <CartDiv>
        
        <CartItem>
          <div className="setMax">
            {cart.items.map((data) =>{
              return <Products  item={data}/>
            })}
            </div>
        </CartItem>
        </CartDiv>}
    </MainDiv>
  );
}


const CartDiv = styled.div`
width:100%;
height:80vh;

`
const CartItem = styled.div`
width:50%;
height:100%;
overflow:scroll;



`
const  MainDiv = styled.div`
width:100%;
text-align:center;
margin-top:10%;
font-size:30px;
`
export default Cart;
 