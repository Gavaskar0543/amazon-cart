function Navbar(){
return(
    <div style={{backgroundColor:"rgb(19,25,33)",color:"whitesmoke"}}  className="h-10">
        <ul className="flex w-screen   justify-evenly text-lg capitalize">
            <li>amazon</li>
            <li>delivery</li>
            <li className="mt-2">
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