import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import Loading from '../Components/Loading';
import Styled from 'styled-components';
import '../Styels/Loading.css';
export default function ShowProduct(){

    const [product,setProduct]=useState('');
    const [loading, setLoading] = useState(true);

    const {id} = useParams();
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(json=>{
                setProduct(json);
                setLoading(false);
            })
    },[]);

   
  if(loading){
    return <Loading/>
  }
    return(
        <>

            <outerDiv className='mt-5'>
                <div>
                    <h1 className='text-5xl capitalize'>{product.category}</h1>
                </div>
                <innerDiv className='m-10 border border-2 flex justify-between'>
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
                        <button class="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
  Add Cart
</button>

                        </div>
                     </div>
                   </div>
                   
                </innerDiv>
               
            </outerDiv>
        </>
    )
}


