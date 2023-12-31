import { useState } from "react"

export default function ForgotPassword(){
    const [email,setEmail] = useState('');

    return(
        <div className="w-64 mx-auto mt-10">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" >
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
          
         
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
             Send Code
            </button>
          </div>
        </form>
      </div>
    )
}