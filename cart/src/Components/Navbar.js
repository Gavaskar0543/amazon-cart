import { library } from '@fortawesome/fontawesome-svg-core';
import { faMapLocationDot,faCartShopping,faGifts,faUser,faAdd,faSearch} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';
import { useSelector } from 'react-redux';
import  Styles  from '../Styels/Navbar.module.css';
import { useEffect, useState } from 'react';


library.add(faMapLocationDot,faCartShopping);
function Navbar(){
   const [user,setUser] = useState(false);
  const cart = useSelector((state) => state.cart);
  const auth = useSelector((state) => state.auth);
  let cartCount = cart.items.length;
  
      
return(
    <OuterDiv  style={{backgroundColor:"rgb(19,25,33)",color:"whitesmoke"}}  className="sticky top-0 capitalize ">
        <div className='logo'>
        <Link to='/'>
         Chya Mart
                </Link> 
        </div>
        <ul >
        
            <li><FontAwesomeIcon  icon={faMapLocationDot}/>delivery</li>
            <li className={Styles.inputForm}>
                <input type="text"  placeholder='Search Here!'/>
                <button><FontAwesomeIcon icon={faSearch} /></button>
            </li>
           
            {auth.user? ( <li><FontAwesomeIcon icon={faUser} />{auth.user.email}</li>):(
              <><Link to="/login">Login</Link><span>/</span><Link to="/signup">signup</Link></>
            )}
        <Link to="/return"> <li><FontAwesomeIcon icon={faGifts}/> Return Orders</li></Link> 
          <Link to='/cart'>
            <li>
                <FontAwesomeIcon icon={faCartShopping} />Cart{cartCount} <notify className='bg-red-500 rounded mb-4'></notify></li>
                
                </Link>
                
        </ul>
        <div  className='menu'>
          <div className='menu-line'></div>
          <div className='menu-line'></div>
          <div className='menu-line'></div>
        </div>
    </OuterDiv>
);
}




const OuterDiv = Styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  .logo {
    font-size:36px;
    font-weight:bolder;
    transition: color 0.3s ease-in-out;


    &:hover {
      color: rgb(254, 189, 105);
    }
  }

  ul li {
    display: inline-block;
    margin: 0 25px;
    cursor: pointer;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: rgb(254, 189, 105);
    }
  }

  .menu-line {
    height: 3px;
    width: 20px;
    margin-bottom: 3px;
    background-color: rgb(254, 189, 105);
  }

  .menu {
    cursor: pointer;
    display: none;
  }

  @media all and (max-width: 940px) {
    /* Corrected 'OuterDiv' to 'OuterDiv' (case-sensitive) */
    width: 100%;
    flex-direction: column;

    ul li {
      display: block;
      padding: 10px 0;
      margin: 0; /* Corrected 'marign' to 'margin' */
    }

    ul {
      text-align: center;
      padding:0;
      display:none;
      
    }

    .logo {
      align-self: flex-start;
      margin: 10px 0 0 30px; /* Corrected 'marign' to 'margin' */
    }

    .menu{
      display:block;
      position:absolute;
      right:20px;
      top:25px;
    }
    .showMenu{
      display:block;
    }
  }
  @media all and (min-width:940)
`;




export default Navbar;