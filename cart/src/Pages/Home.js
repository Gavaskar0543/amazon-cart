import React,{useEffect,useState} from 'react';
import Styled from 'styled-components';
import ItemCart from '../Components/ItemCard';
import UserAdd from '../Components/UserAdd';
function Home({store}){
   const{list} = store.getState();
   const {userAdded} = store.getState();
  
    return(
        <>
       <HomeLayout className="mt-2">
        <h2 className="text-3xl ml-4">Recomended category</h2>
        <StyledDiv>
       {list.map((item,index) => <ItemCart item={item} key={index}/>)}
       </StyledDiv>
       </HomeLayout>
       <UserLayout>
        <UserAdd userAdded={userAdded}/>
       </UserLayout>
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

  @media all and (max-width: 639px) {
    /* Your CSS rules for mobile phones */
    display: grid;
    grid-template-columns: 1fr;
  }
  
`;

const UserLayout = Styled.div`
width:95%;
`;
export default  Home;