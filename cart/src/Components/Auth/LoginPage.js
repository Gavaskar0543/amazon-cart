import { getAuth,signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate ,Link} from "react-router-dom";
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
       
     <div className="w-64 mx-auto mt-10">
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"  onSubmit={handleSignin}>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
        Email
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="username"
        type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
      />
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="password"
        type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
      />
    </div>
    <div className="flex items-center justify-between">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit" 
      >
        Sign In
      </button>
    </div>
  </form>
  <p className="mt-6 mb-6 text-center font-bold">#forgot password <Link to="/forgotPassword" className="text-blue-400 underline   hover:text-red-200">click here</Link></p>
</div>

    )
}