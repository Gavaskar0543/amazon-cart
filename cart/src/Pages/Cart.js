import { useEffect, useState } from 'react';
import Styled from 'styled-components';
function Cart({store}) {
  const [quantity,setQuantity] = useState(1);
  const [total,setToatal] = useState(0);
  
useEffect(() =>{
  cartList.map(item => {
    let price = item.price*quantity;
    setToatal(price);
  })
},[quantity])
  const increaseQuantity = () =>{
    let newQuantity = quantity+1;
      setQuantity(newQuantity);
  }
  const decreaseQuantity = () =>{
    if(quantity === 0){
      return;
    }
    let newQuantity = quantity-1;
    setQuantity(newQuantity);

  }
   const{cartList} = store.getState();
   console.log(cartList)
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
          <button onClick={decreaseQuantity} className='py-2 px-2  text-1xl rounded '>-</button>
          <input type='text'  value={quantity}   />
          <button onClick={increaseQuantity } className='py-2 px-2  text-1xl rounded '>+</button>
        </ButtonDiv>
      </LeftDiv>)}
     <RightDiv>
      <div>
        <div>
          <h1 className="text-2xl text-center w-full">Cart Value</h1>
        </div>
        <div className='flex justify-between'>
        <h1>Item Quantity:</h1>
        <h1>{quantity}</h1>
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

`

export default Cart;