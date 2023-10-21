import styled from "styled-components"
import { useDispatch,useSelector } from "react-redux";
import { addItem,removeItem } from "../Redux/Reducer/cartSlice";
import Stars from "./Stars";
export default function Products(props){
const cart = useSelector((state) => state.cart);
const dispatch = useDispatch();
const {title,image,price,rating} = props.item;
const isItemInCart = cart.items.some((element) => element.id === props.item.id);

const fillStarts = (rate) => {
   const starsArray = [];
   for (let i = 0; i < Math.round(rate); i++) {
     starsArray.push(<Stars key={i} />);
   }
   return starsArray;
}

const handleAddToCart = (item) => {
  
   dispatch(addItem(item));
   
 };
 const handleRemoveFromCart = (itemId) => {
   
   dispatch(removeItem(itemId));
  
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