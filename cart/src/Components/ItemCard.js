import Styled from 'styled-components';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
export default function ItemCard({item}){
    const cart = useSelector((state) => state.cart);
    console.log(cart)
    return(
        <>
       
        
        
        </>
    );
}




