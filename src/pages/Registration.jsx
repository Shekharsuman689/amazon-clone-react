// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { getAuth, createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
// import ArrowRightIcon from "@mui/icons-material/ArrowRight";
// import { darkLogo } from "../assets/index";
// import { RotatingLines } from 'react-loader-spinner';

// const Registration = () => {
//   const auth = getAuth();

//   const [clientName, setClientName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [cPassword, setCPassword] = useState("");

//   // Error Message start
//   const [errClientName, setErrClientName] = useState("");
//   const [errEmail, setErrEmail] = useState("");
//   const [errPassword, setErrPassword] = useState("");
//   const [errCPassword, setErrCPassword] = useState("");
//   const [firebaseErr,setFirebaseErr] =useState("")
//    // Loading State start
//    const [loading,setLoading] =useState(false)
//    const [successMsg,setSuccessMsg] =useState("")

//   // Handle funtion start
//   const handleName = (e) => {
//     setClientName(e.target.value);
//     setErrClientName("");
//   };
//   const handleEmail = (e) => {
//     setEmail(e.target.value);
//     setErrEmail("");

//   };
//   const handlePassword = (e) => {
//     setPassword(e.target.value);
//     setErrPassword("");
//   };
//   const handleCPassword = (e) => {
//     setCPassword(e.target.value);
//     setErrCPassword("");
//   };

//   // Email validation start
//   const emailValidation = (email) => {
//     return String(email)
//       .toLowerCase()
//       .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
//   };

//   // Submit button start
//   const handleRegistration = (e) => {
//     e.preventDefault();
//     if (!clientName) {
//       setErrClientName("Enter your name");
//     }
//     if (!email) {
//       setErrEmail("Enter your email");
//       setFirebaseErr("")
//     } else {
//       if (!emailValidation(email)) {
//         setErrEmail("Enter a valid email");
//       }
//     }
//     if (!password) {
//       setErrPassword("Enter your password");
//     } else {
//       if (password.length < 6) {
//         setErrPassword("Passwords must be at least 6 characters");
//       }
//     }
//     if (!cPassword) {
//       setErrCPassword("Confirm your password");
//     } else {
//       if (cPassword !== password) {
//         setErrCPassword("Password not matched");
//       }
//     }

//     if (
//       clientName &&
//       email &&
//       emailValidation(email) &&
//       password &&
//       password.length >= 6 &&
//       cPassword &&
//       cPassword === password
//     ) {
//       setLoading(true)
//       createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     updateProfile(auth.cur.currentUser,{
//       displayName: clientName,
//     })
//     // Signed up
//     const user = userCredential.user;
//     console.log(user)
//     setLoading(false)
//     setSuccessMsg("Account Created Successfully")
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     // const errorMessage = error.message;
//     if(errorCode.includes("auth/email.already-in-use")){
//       setFirebaseErr("Email already in use try another one")
//     }
//     // ..
//   });

//       // =========== Firebase Registration End here ===============
//       setClientName("");
//       setEmail("");
//       setPassword("");
//       setCPassword("");
//       setErrCPassword("");
//       setFirebaseErr("")
//     }
//   };
//   return (
//     <div className="w-full">
//       <div className="w-full bg-gray-100 pb-10">
//         <form className="w-[370px] mx-auto flex flex-col items-center">
//           <Link to="/">
//             <img className="w-32" src={darkLogo} alt="darkLogo" />
//           </Link>
//           <div className="w-full border border-zinc-200 p-6">
//             <h2 className="font-titleFont text-3xl font-medium mb-4">
//               Create Account
//             </h2>
//             <div className="flex flex-col gap-3">
//               <div className="flex flex-col gap-2">
//                 <p className="text-sm font-medium">Your name</p>
//                 <input
//                   onChange={handleName}
//                   value={clientName}
//                   type="text"
//                   className="w-full py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
//                 />
//                 {errClientName && (
//                   <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
//                     <span className="italic font-titleFont font-extrabold text-base">
//                       !
//                     </span>
//                     {errClientName}
//                   </p>
//                 )}
//               </div>
//               <div className="flex flex-col gap-2">
//                 <p className="text-sm font-medium">
//                   Email or mobile phone number
//                 </p>
//                 <input
//                   onChange={handleEmail}
//                   value={email}
//                   type="email"
//                   className="w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
//                 />
//                 {errEmail && (
//                   <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
//                     <span className="italic font-titleFont font-extrabold text-base">
//                       !
//                     </span>
//                     {errEmail}
//                   </p>
//                 )}
//                 {firebaseErr && (
//                   <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
//                     <span className="italic font-titleFont font-extrabold text-base">
//                       !
//                     </span>
//                     {firebaseErr}
//                   </p>
//                 )}
//               </div>
//               <div className="flex flex-col gap-2">
//                 <p className="text-sm font-medium">Password</p>
//                 <input
//                   value={password}
//                   onChange={handlePassword}
//                   type="password"
//                   className="w-full py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
//                 />
//                 {errPassword && (
//                   <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
//                     <span className="italic font-titleFont font-extrabold text-base">
//                       !
//                     </span>
//                     {errPassword}
//                   </p>
//                 )}
//               </div>
//               <div className="flex flex-col gap-2">
//                 <p className="text-sm font-medium">Re-enter Password</p>
//                 <input
//                   onChange={handleCPassword}
//                   value={cPassword}
//                   type="password"
//                   className="w-full py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
//                 />
//                 {errCPassword && (
//                   <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
//                     <span className="italic font-titleFont font-extrabold text-base">
//                       !
//                     </span>
//                     {errCPassword}
//                   </p>
//                 )}
//                 <p className="text-xs text-gray-600">
//                   Passwords must be at least 6 characters.
//                 </p>
//               </div>
//               <button
//                 onClick={handleRegistration}
//                 className="w-full py-1.5 text-sm font-normal rounded-sm bg-gradient-to-t from-[#f7dfa5] to-[#f0c14b] hover:bg-gradient-to-b border border-zinc-400 active:border-yellow-800 active:shadow-amazonInput"
//             >
//                 Continue
//               </button>
//                {
//           loading && (
//             <div className='flex justify-center'>
//               <RotatingLines
//                       visible={true}
//                       height="96"
//                       width="50"
//                       strokeColor="#f3a847"
//                       strokeWidth="5"
//                       animationDuration="0.75"
//                       ariaLabel="rotating-lines-loading"
//                       wrapperStyle={{}}
//                       wrapperClass=""
//                       />
//             </div>
//           )}
//           {
//             successMsg && (
//               <div className='text-base font-titleFont font-semibold text-green-600 border-[1px]
//               border-green-500 px-2 py-2 text-center'>
//                 {successMsg}
//                  </div>
//                  )
//                  }
//             </div>
//             <p className="text-xs text-black leading-4 mt-4">
//               By Continuing, you agree to Amazon's{" "}
//               <span className="text-blue-600">Conditions of Use </span>and{" "}
//               <span className="text-blue-600">Privace Notice.</span>
//             </p>
//             <div>
//               <p className="text-xs text-black">
//                 Already have an account?{" "}
//                 <Link to="/signin">
//                   <span className="text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100">
//                     Sign in{" "}
//                     <span>
//                       <ArrowRightIcon />
//                     </span>
//                   </span>
//                 </Link>
//               </p>
//               <p className="text-xs text-black -mt-2">
//                 Buying for work?{" "}
//                 <span className="text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100">
//                   Create a free business account
//                 </span>
//               </p>
//             </div>
//           </div>
//         </form>
//       </div>
//       <div className="w-full bg-gradient-to-t from-white via-white to-zinc-200 flex flex-col gap-4 justify-center items-center py-10">
//         <div className="flex items-center gap-6">
//           <p className="text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100">
//             Conditions of Use
//           </p>
//           <p className="text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100">
//             Privacy Notice
//           </p>
//           <p className="text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100">
//             Privacy Notice
//           </p>
//         </div>
//         <p className="text-xs text-gray-600">
//           © 1996-2024, ReactBd.com, Inc. or its affiliates
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Registration;

import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth, db } from "../firebase.config";
import { setDoc, doc } from "firebase/firestore";

 import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Registration() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: fname,
          lastName: lname,
          photo: "",
        });
      }
      console.log("User Registered Successfully!!");
      toast.success("User Registered Successfully!!", {
        position: "top-center",
      });
      navigate("/signin")
    } catch (error) {
      console.log(error.message);
      // toast.error(error.message, {
      //   position: "bottom-center",
      // });
      const navigate = useNavigate();

  // const handleSignUpClick = () => {
  //   navigate('/signin');
  // };
    }
  };
  return (
    <form
      onSubmit={handleRegister}
      className="max-w-sm mx-auto mt-10 p-6 border border-gray-500 rounded-md shadow-md"
    >
      <h3 className="text-2xl font-semibold mb-4">Sign Up</h3>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-800">
          First name
        </label>
        <input
          type="text"
          className="mt-1 block w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="First name"
          onChange={(e) => setFname(e.target.value)}
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Last name
        </label>
        <input
          type="text"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Last name"
          onChange={(e) => setLname(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Email address
        </label>
        <input
          type="email"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          type="password"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <div className="mb-4">
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
          
        >
          Sign Up
        </button>
      </div>

      <p className="text-sm text-center">
        Already registered?{" "}
        <a href="/signin" className="text-blue-400 hover:underline">
          Login
        </a>
      </p>
    </form>
  );
}

export default Registration;