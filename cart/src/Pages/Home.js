import React,{useEffect,useState} from 'react';
import Styled from 'styled-components';
import ItemCart from '../Components/ItemCard';
function Home({products}){
  
    return(
        <>
       <HomeLayout className="mt-2">
        <h2 className="text-3xl ml-4">Recomended Category</h2>
        <StyledDiv>
       {products.map((item,index) => <ItemCart item={item} key={index}/>)}
       </StyledDiv>
       </HomeLayout>
        </>
    );
}

const HomeLayout = Styled.div`
width:95%;
`
const StyledDiv = Styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  /* Other styles for the container */
`;
export default  Home;