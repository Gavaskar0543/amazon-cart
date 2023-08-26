import React,{useEffect,useState} from 'react';
import Styled from 'styled-components';
import ItemCart from '../Components/ItemCard';
function Home({products}){
   console.log('pro',products)
    return(
        <>
       <div className="mt-2">
        <h2 className="text-xl">Recomended Category</h2>
        <StyledDiv>
       {products.map((item,index) => <ItemCart item={item} key={index}/>)}
       </StyledDiv>
       </div>
        </>
    );
}


const StyledDiv = Styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  /* Other styles for the container */
`;
export default  Home;