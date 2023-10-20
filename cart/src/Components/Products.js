import styled from "styled-components"
export default function Products(props){
const {title} = props.item;
    return (
        <>
        <MainDiv>
        <ProductDiv>

        <h1>{title}</h1>

        </ProductDiv>
        </MainDiv>
        </>
    )
}
const MainDiv = styled.div`
display:flex;
flex-wrap:wrap;

`;
const ProductDiv = styled.div`

width:20%;
height:10rem;
padding:auto;
display:flex;
flex-wrap:wrap;



`