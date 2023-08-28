import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import Loading from '../Components/Loading';
import { showCartCount } from '../Action';
import { removeFromCart } from '../Action';
import Styled from 'styled-components';
import '../Styels/Loading.css';
import { add2Cart } from '../Action';
export default function ShowProduct({store}){

  let {cartList,cartCount} = store.getState();

    const [product,setProduct]=useState('');
    const [loading, setLoading] = useState(true);
    const [addToCart,setAddToCart] = useState(false);
    const [cart,setCart] = useState(0);
    const {id} = useParams();
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(json=>{
                setProduct(json);
                setTimeout(() => {
                  setLoading(false);
                }, 3000);
            });
  
    },[]);
  
const handleCart=(item)=>{
 item.qty=0
 store.dispatch(add2Cart(item));
  setAddToCart(true);


}
const handleRemoveCart = (item) =>{
  setAddToCart(false);
 
  store.dispatch(removeFromCart(item));
}
   
  if(loading){
    return <Loading/>
  }
    return(
        <>

            <div className='mt-5'>
                <div>
                    <h1 className='text-5xl capitalize'>{product.category}</h1>
                </div>
                <div className='m-10 border border-2 flex justify-between'>
                   <div>
                    <img src={product.image} alt='product-img' width={320} />
                   </div>
                   <div style={{marginRight:"2%",width:"60%"}} className='border border-2'>
                     <div className='flex flex-col h-full border border-4 justify-evenly items-start mb-4'>
                        <div>
                           <h1 className="text-2xl">{product.title}</h1>
                        </div>
                        <div>
                           <p className='p-2 capitalize'>{product.description}</p>
                        </div>
                        <div>
                           <h1 className='text-3xl'>&#x20B9; {product.price}</h1>
                        </div>
                        <div className='w-full flex justify-center'>
                        {addToCart ? <button onClick={()=>handleRemoveCart(product)} className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
  Remove from Cart
</button>: <button onClick={()=>handleCart(product)} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
  Add Cart
</button>}

                        </div>
                     </div>
                   </div>
                   
                </div>
               
            </div>
        </>
    )
}


