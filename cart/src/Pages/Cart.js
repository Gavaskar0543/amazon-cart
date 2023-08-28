import { useEffect, useState } from 'react';
import Styled from 'styled-components';
function Cart({store}) {
  let {cartList,cartCount} = store.getState();
  const [total,setToatal] = useState(0);
  const [cart,setCart] = useState(0);
  
 useEffect(()=>{

  let count = 0;
 
  cartList.map((product) => {
    count = count+product.qty * product.price;
  });
  setToatal(count);
  //handle cart count
 
 },[cart,cartCount])
  const increaseQuantity = (item) =>{
   
    let id = cartList.indexOf(item);
    cartList[id].qty = cartList[id].qty + 1;
    setCart(cart+1);
   
   
  }
     
  const decreaseQuantity =  (item) =>{
     let id = cartList.indexOf(item);
     if(cartList[id].qty === 0){
      return;
     }
    
  // Update the quantity using the correct syntax
  cartList[id].qty = cartList[id].qty - 1;
 if(cart === 0){
  return;
 }
 setCart(cart-1);
 
     
  }
  
   return(
    <>
    <OuterDiv className='h-full'>
     {cartList.map(item => 
      <LeftDiv>
        
        <div>
          <img src={item.image} width={150}/>
        </div>
        <div>
          <h1 className='text-2xl'>{item.title}</h1>
        </div>
        <ButtonDiv className='text-1xl'>
          <button onClick={() => {decreaseQuantity(item)}} className='py-2 px-2  text-1xl rounded '>-</button>
          <h1 className='text-center'>{item.qty}</h1>
          <button onClick={() =>{increaseQuantity(item)}} className='py-2 px-2  text-1xl rounded '>+</button>
        </ButtonDiv>
        
      </LeftDiv>)}
     <RightDiv>
      <div>
        <div>
          <h1 className="text-2xl text-center w-full">Cart Value</h1>
        </div>
        <div className='flex justify-between'>
        <h1>Item Quantity:</h1>
        <h1>{cart}</h1>
        </div>
        <div className='flex justify-between'>
         <h1>GST:</h1>
         <h1>15%</h1>
        </div>
        <div  className='flex justify-between'>
         <h1> Net Amount: 
         </h1>
         <h1>{Math.round(total)}</h1>
        </div>
        <div className='w-full flex items-center justify-center '>
          <button className='py-2 px-2 bg-yellow-600 text-1xl rounded'>Pay now</button>
        </div>
      </div>
     </RightDiv>
    </OuterDiv>
     
  
    </>
   ); 
}

const OuterDiv = Styled.div`
width:90%;
margin:5%;
display:flex;
justify-content:center;


`;
const LeftDiv = Styled.div`
width:45%;


`;
const RightDiv = Styled.div`
width:45%;


`;
const ButtonDiv = Styled.div`
display:flex;
text-align:center;
justify-content:space-evenly;
align-items:center;
width:30%;
  
   input{
    width:15%;
    
   }
   button{
    width:20%;
     background:grey;
   }
  

`;

export default Cart;