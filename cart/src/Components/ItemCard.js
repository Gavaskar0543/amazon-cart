import Styled from 'styled-components';
import {Link} from 'react-router-dom';
export default function ItemCard({item}){
    return(
        <>
       
         <OuterDiv id={item.id} className="mt-2 mb-1 ml-5 text-center border border-2 inline-block" >
         <ImgDiv className='mt-2'>
         <img src={item.image} alt="product-id#423$" width={100}/>
         </ImgDiv>
         <div >
          <Link  className='itemName' to={`/product/${item.id}`}><p  style={{color:"rgb(157,165,164)"}} className='text-2xl'>{item.title}</p></Link>
         </div>
        
         <div>
            <h5 className='text-1xl'>&#x20B9; {item.price}</h5>
         </div>
         <div>
            <p className='text-1sm'>Free delivery</p>
         </div>
        </OuterDiv>
        
        </>
    );
}





const OuterDiv = Styled.div`



&:hover{
    background: rgba( 255, 255, 255, 0.3 );
    color: rgb(254, 189, 105) !important;
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 10px;
   
}
`;




const ImgDiv = Styled.div`
 width:100%;
 display:flex;
 justify-content:center;
`