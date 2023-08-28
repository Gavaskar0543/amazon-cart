import  Styled  from "styled-components";
import ItemCart from "./ItemCard";
import { useState } from "react";
function UserAdd({userAdded}){
    const [checkBox,setCheckBox] = useState(false);
   
    return(
        <>
        <div>
            <div className="w-full">
            <h1 className="text-3xl ml-5 mt-7 center">User Added category</h1>
            </div>
        <StyledDiv>
           { userAdded.map((item,index) => <ItemCart item={item} key={index}/>)}
        </StyledDiv>
        </div>
        </>
    )
}

const StyledDiv = Styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  /* Other styles for the container */
`;

export default UserAdd;