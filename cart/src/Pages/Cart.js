import { useEffect,useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Products from "../Components/Products";
import EmojisContainer from "../Components/EmojisContainer";
function Cart({store}) {
  const [isEmpty,setEmpty] = useState(true);
  const [promoCodeError,setPromoCodeError] = useState(false);
  const [userPromo,setUserPromo] = useState('');
  const [cost,setCost] =useState('');
  const [offerApplied,setOfferApplied] = useState(false);
  let cart = useSelector((state) => state.cart);

  useEffect(() => {
    if (cart.items.length > 0) {
      setEmpty(false);
      setCost(cart.totalValue);
    } else {
      setEmpty(true);
    }
  }, [cart.items,cart.totalValue]);
 
  
const handleApplyPromo = ()=>{
  

    if(userPromo === 'NewUser50'){

      setCost(cost/2);
      setOfferApplied(true);
   
     }
     else{
       setPromoCodeError(true);
       setTimeout(()=>{
         setPromoCodeError(false);
       },3000)
      }
 
}

  return (
    <>
    <div className="flex ">
    <MainDiv>
      {isEmpty ?<> <h1 className="setCenter font-semibold text-center text-2xl p-4">Your cart is empty &#x1F6D2;</h1> <EmojisContainer/></>: 
         
       
        <section id="jewellery" className='section mb75'>
       <div className="section-heading">
        <span className="font-bold text-sm">Review Your Cart</span>
        </div>
        <div className='flex flex-wrap justify-around  mt-4 mb-4'>
         {cart.items.map((data) => {
          return <Products item={data.prod} quantity={data.quantity} cart={true}/>
         })}
        
        </div>
        </section>

        }
    </MainDiv>

    {!isEmpty ?  
   ( <CartValue>
    <section id="jewellery" className='section mb75'>
       <div className="section-heading">
        <span className="font-bold text-sm">Bill</span>
        </div>
         <div>
          <div className="border border-2 rounded shadow font-semibold">
            <marquee behaviour="alternate">  Use Promo Code <span className="text-red-900 font-semibold">"NewUser50"</span> To get 50% off valid only once per user!</marquee>
          </div>
          <div className="px-2 py-2 shadow mt-2 ">
          <div className="flex justify-between mt-2 mb-3">
            <p className="p-2 font-bold">Items in Cart:</p> 
            <p className="p-2">{cart.items.length}</p>
          </div>
          <div className="flex justify-between mt-2 mb-3">
            <p>
              Enter promo Code </p>
              {!offerApplied ?  (
              <><div className="">
                        <input type="text" class="border text-red-600 font-semibold border-transparent  focus:outline-none"
                          onChange={(e) => { setUserPromo(e.target.value); } } value={userPromo} placeholder="Enter valid code" />
                        {promoCodeError ? (<span className="text-red-600  left-minus-50">promo expired/invalid</span>) : ''}
                      </div><button class="px-2 py-1 bg-blue-500  font-semibold text-center text-white rounded hover:bg-red-600" onClick={handleApplyPromo}>
                          Apply
                        </button></> ): (<p className="text-green-600 font-bold">{userPromo} applied successfully!</p>)}
          </div>
          <div  className="flex justify-between mt-2 mb-3">
            <p className="font-semibold">Total:</p>
            <span className="font-semibold">₹{cost}</span>
            </div>

          <div className="flex justify-center mt-4 mb-3">
          <button class="px-2 py-1 bg-black  font-semibold text-center text-white rounded hover:bg-red-600">
        Order Now
      </button>
          </div>

          </div>
         </div>

        </section>
    </CartValue>) : ''
 }
    </div>
    </>
  );
}

const CartValue = styled.div`
width:40vw;
height:84vh;
overflow:scroll;

.left-minus-50 {
position:relative;
top:20px;
left:-20px;
font-size:12px;

}

.section{
  width:100%;
  display: flex;
  flex-direction: column;
  align-items: center;

}

.section-heading span{
  font-size: 40px;
  color:#033b56;
  display: inline-block;
  padding-top:10px;
  margin-right:0.5rem;
  text-transform: uppercase;
}
.mb75{
  margin-bottom:75px;
}
.section-heading{
  width:auto;
  padding:2px 10px 10px;
 
  font-weight:auto;
}

`

const  MainDiv = styled.div`

width:60vw;
height:84vh;
overflow:scroll;


.section{
  width:100%;
  display: flex;
  flex-direction: column;
  align-items: center;

}


.section-heading{
  width:auto;
  padding:2px 10px 10px;
 
  font-weight:auto;
}

.section-heading span{
  font-size: 40px;
  color:#033b56;
  display: inline-block;
  padding-top:10px;
  margin-right:0.5rem;
  text-transform: uppercase;
}
.mb75{
  margin-bottom:75px;
}


`
export default Cart;
 