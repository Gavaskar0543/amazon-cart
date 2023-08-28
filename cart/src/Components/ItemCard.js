import Styled from 'styled-components';
import {Link} from 'react-router-dom';
export default function ItemCard({item}){
    return(
        <>
         <div id={item.id} className="mt-2 mb-1 ml-5 border border-2 inline-block" >
         <ImgDiv className='mt-2'>
         <img src={item.image} alt="product-id#423$" width={100}/>
         </ImgDiv>
         <div>
          <Link to={`/product/${item.id}`}><p style={{color:"rgb(157,165,164)"}} className='text-2xl'>{item.title}</p></Link>
         </div>
        
         <div>
            <h5 className='text-1xl'>&#x20B9; {item.price}</h5>
         </div>
         <div>
            <p>Free delivery:{item.qty}</p>
         </div>
        </div>
        
        </>
    );
}

const ImgDiv = Styled.div`
 width:100%;
 display:flex;
 justify-content:center;
`