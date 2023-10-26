import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { info, warning } from '../../Config/toastify';
import { useEffect } from 'react';

function SignupPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword,setConfirmPassword] = useState('');
  useEffect(()=>{
    document.title = 'ChyaMart|signup';
  },[])
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      if(password !== confirmPassword){
            warning("password/confirmpassword mismatch");
            return;
      }
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      info('User registered');
      navigate('/')
      // You can add additional logic here, such as sending a confirmation email or redirecting the user.
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
   
     <div className="w-64 mx-auto mt-10">
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"  onSubmit={handleSignup}>
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
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
        Confirm Password
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="password"
        type="password"
          placeholder="Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
      />
    </div>
    <div className="flex items-center justify-between">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >
        create Account
      </button>
    </div>
  </form>
</div>
  );
}

export default SignupPage;
