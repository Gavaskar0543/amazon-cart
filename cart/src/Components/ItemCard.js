import Styled from 'styled-components';
export default function ItemCard({item}){
    return(
        <>
         <div id={item.id} className="mt-2 mb-1  ml-5 border border-2 inline-block" >
         <ImgDiv>
         <img src={item.image} alt="product-id#423$" width={100}/>
         </ImgDiv>
         <div>
            <p className='text-2xl'>{item.title}</p>
         </div>
         <div>
           <p>{item.description}</p>
         </div>
         <div>
            <h5>{item.price}</h5>
         </div>
         <div>
            <p>Free delivery</p>
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