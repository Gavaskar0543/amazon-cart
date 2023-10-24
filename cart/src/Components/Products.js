import styled from "styled-components"
import { useDispatch,useSelector } from "react-redux";
import { addItem,removeItem ,increaseQuantity,decreaseQuantity,calculateTotalCartValue} from "../Redux/Reducer/cartSlice";
import Stars from "./Stars";
import {  useEffect } from "react";
export default function Products(props){
const cart = useSelector((state) => state.cart);
const dispatch = useDispatch();
useEffect(()=>{
  console.log(cart);
},[cart])
const {title,image,price,rating} = props.item;
const isItemInCart = cart.items.some((element) => element.prod.id === props.item.id);

const fillStarts = (rate) => {
   const starsArray = [];
   for (let i = 0; i < Math.round(rate); i++) {
     starsArray.push(<Stars key={i} />);
   }
   return starsArray;
}


const handleAddToCart = (item) => {
  
   dispatch(addItem(item));
   dispatch(calculateTotalCartValue());
   
   
 };
 const handleIncreaseQuantity = (item) => {
 
  dispatch(increaseQuantity(item));
  dispatch(calculateTotalCartValue());
  
  
  
};
const handleDecQuantity = (item) => {
 

  dispatch(decreaseQuantity(item));
  dispatch(calculateTotalCartValue());
  
  
  
};

 const handleRemoveFromCart = (itemId) => {
 

   dispatch(removeItem(itemId));
   dispatch(calculateTotalCartValue());
  
  
 };
    return (
        <>
        <ProductDiv>
         <div className="px-3 py-4 element">
            <img src={image} width={70} alt="img"/>
         </div>


         <div>
            <h2 className="font-medium text-color">{title}</h2>
         </div>
         <div>
            <p className="font-extrabold">₹{Math.round(price)}</p>
         </div>

         <div>
           <span className="font-semibold" >Rating:</span>
          <span> { fillStarts(rating.rate)}</span> 
            <span className="font-thin text-gray-600">({rating.count})</span>
         </div>
         <div>
          {props.cart ? (<div class="flex space-x-4  px-4  ">
      <button class="px-2 py-1 bg-black text-white font-semibold text-center rounded hover:bg-green-600"  onClick={() => {handleDecQuantity(props.item.id)}}>
        -
      </button>
      <input type="number" class="w-12  font-semibold text-center " value={props.quantity}/>
      <button class="px-2 py-1 bg-blue-500  font-semibold text-center text-white rounded hover:bg-red-600" onClick={() =>{handleIncreaseQuantity(props.item.id)}}>
        +
      </button>
    </div> ) : ''

          }
        
         {isItemInCart ? (
        <button
          className="bg-red-500 text-white mt-2 mb-2 font-semibold py-2 px-4 rounded"
          onClick={() => handleRemoveFromCart(props.item.id)}
        >
          Remove from Cart
        </button>
      ) : (
        <button
          className="bg-black text-white mt-2 mb-2 font-semibold py-2 px-4 rounded"
          onClick={() => handleAddToCart(props.item)}
        >
          Add To Cart
        </button>
      )}
         </div>

        </ProductDiv>
        </>
    )
}
const ProductDiv = styled.div`
width:30%;
height:19rem;
display:flex;
flex-direction:column;
align-items:center;
margin-bottom:3%;

button:hover{
   background-color:#ff892d;
}
.text-color:{
    color:#043a56;
}
.element{
  transition:transform 1s ease-in-out;
}
.element:hover{
   margin-bottom:10px;
   transform: scale(1.5) rotateY(360deg);
}

`