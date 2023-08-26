import { library } from '@fortawesome/fontawesome-svg-core';
import { faMapLocationDot,faCartShopping,faGifts,faUser,faAdd,faSearch} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';
import  Styles  from '../Styels/Navbar.module.css';

library.add(faMapLocationDot,faCartShopping);
function Navbar(){
return(
    <div style={{backgroundColor:"rgb(19,25,33)",color:"whitesmoke"}}  className="h-10">
        <ul className="flex  justify-evenly items-center text-lg capitalize cursor-pointer">
            <li>
                <Link to='/'>
                <img src={"https://d24v5oonnj2ncn.cloudfront.net/wp-content/uploads/2018/10/16030301/Amazon-Logo-Black.jpg"} alt="poste" width={72} />
                </Link>
            </li>
            <li><FontAwesomeIcon  icon={faMapLocationDot}/>delivery</li>
            <li className={Styles.inputForm}>
                <input type="text"  placeholder='Search Here!'/>
                <button><FontAwesomeIcon icon={faSearch} /></button>
            </li>
            <Link to='/addproduct'>
            <li><FontAwesomeIcon icon={faAdd}/>Add Products</li>
            </Link>
            <li><FontAwesomeIcon icon={faUser} />user</li>
            <li><FontAwesomeIcon icon={faGifts}/> Return Orders</li>
            <Link to='/cart'>
            <li>
                <FontAwesomeIcon icon={faCartShopping} />Cart</li>
                </Link>
        </ul>
    </div>
);
}
export default Navbar;