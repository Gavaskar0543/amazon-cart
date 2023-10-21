import { getAuth,signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../Redux/Reducer/authSlice";
import { useSelector,useDispatch } from "react-redux";
export default function LoginPage(){
  const dispatch = useDispatch();
  const newUser = useSelector((state) => state.auth);
  const navigate = useNavigate();
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
const handleSignin = (e) => {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        dispatch(login(user));
         console.log('login success');
         navigate('/');
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
      });
    }
    return(
        <form onSubmit={handleSignin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
       
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
  

        <button type="submit">Sign Up</button>
      </form>
    )
}