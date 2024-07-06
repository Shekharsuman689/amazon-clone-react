import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase.config";
import { Link } from "react-router-dom";
// import { toast } from "react-toastify";
// import SignInwithGoogle from "./signInWIthGoogle";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in Successfully");
      window.location.href = "/";
      // toast.success("User logged in Successfully", {
      //   position: "top-center",
      // });
    } catch (error) {
      console.log(error.message);

      // toast.error(error.message, {
      //   position: "bottom-center",
      // });
    }
  };

return (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-indigo-300">
    <div className="w-full max-w-xs bg-gray-200 p-9 rounded-md shadow-sm">
      <div className="text-center mb-9">
      <Link to = "/">
        <img src="/src/assets/logoAmaz.png" alt="Logo" className="mx-auto h-12 w-auto" />
        </Link>
      </div>
      <h3 className="text-2xl font-semibold mb-6 text-gray-800 text-center">Sign In</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-800 text-sm font-bold mb-2" htmlFor="email">
            Email address
          </label>
          <input
            type="email"
            id="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-800 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            Sign In
          </button>
        </div>
        <p className="text-center text-gray-600 text-sm mt-4">
          New user? <a href="/registration" className="text-blue-500 hover:text-blue-700">SignUp Here</a>
        </p>
      </form>
    </div>
   </div>
);
}

export default Signin;