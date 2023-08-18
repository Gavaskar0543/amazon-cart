function Navbar(){
return(
    <div style={{backgroundColor:"rgb(19,25,33)",color:"whitesmoke"}}  className="h-20">
        <ul className="flex w-screen mt-4  justify-evenly text-lg capitalize">
            <li>amazon</li>
            <li>delivery</li>
            <li>
                <input type="text" />
            </li>
            <li>choose Languae</li>
            <li>userlogin</li>
            <li>Return Orders</li>
            <li>cart</li>
        </ul>
    </div>
);
}
export default Navbar;