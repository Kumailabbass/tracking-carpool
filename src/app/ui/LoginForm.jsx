// 'use client'
// import { signIn, useSession } from 'next-auth/react';
// import { useRouter } from 'next/navigation';
// import React, { useEffect, useState } from 'react'

// const LoginForm = () => {
//   const router = useRouter();
//     const [isLoading, setIsLoading] = useState(false)
//     const [errorMessage, setErrorMessage] = useState(null);
//     const [email, setEmail] = useState(null);
//     const [password, setPassword] = useState(null); 
//     const session = useSession()
//     // useEffect( () =>{
        
//     //     const setUp = async () => {    
//     //     if (session) {
//     //       router.push('/profile')
//     //     }   
//     //     }
//     //    setUp();
//     // }, [])

 

  
//   const handleLoginUser = async (e) => {   
//     console.log("I RANNNNN")
//     e.preventDefault();
//     if(isLoading) return;
//     if(email == null || email.length == 0 || password == null || password.length == 0) {
//         setErrorMessage("Please fill all required fields");
//         return;
//     }
//     try {
//         setErrorMessage(null);
//         setIsLoading(true);
//         // const resp = 
//         await signIn("credentials", 
//             {
//                 redirect: true,
//                 email:email,
//                 password:password,
//                 callbackUrl:'/'
//             });
//             // if(resp.ok){
//             //     //login success
//             //     setIsLoading(false);
//             //     router.push('/profile')
//             // }
//             // else {
//             //     if(resp.error == 'CredentialsSignin'){
//             //         setIsLoading(false);
//             //         setErrorMessage("Incorrect email or password")
//             //     }
//             //     else {
//             //         setIsLoading(false);
//             //         setErrorMessage("something went wrong. Please try again")
//             //     }
//             // } 
  
//         } catch (error) {
//             setIsLoading(false);
//             setErrorMessage("something went wrong. Please try again")

//         }

 
//   }
    
//   // if(Boolean(session)){
//   //   return <>Loading ...</>
//   // }
//   return (
//     <div className="flex items-center  justify-center min-h-screen bg-gray-100">
//     <div className="bg-white p-6 w-72 flex flex-col items-center rounded-md shadow-lg">
//       <div className="text-center mb-5">
//         <h1 className="text-2xl font-bold">
//           <span className="text-3xl text-red-800">L</span>OGIN
//         </h1>
//       </div>
//       <form onSubmit={handleLoginUser} className="w-full">
//         <label htmlFor="uname" className="block font-bold text-lg">
//           Username
//         </label>
//         <input
//           type="text"
//           name="uname"
//           onChange={(e)=>setEmail(e.target.value)}
//           required
//           className="font-medium w-full p-1 mt-1 mb-2 border-b-2 border-gray-900 focus:outline-none"
//         />
//         <label htmlFor="psw" className="block font-bold text-lg mt-2">
//           Password
//         </label>
//         <input
//           type="password"
//           name="psw"
//           onChange={(e) => setPassword(e.target.value)}
//           required
//           className="font-medium w-full p-1 mt-1 mb-4 border-b-2 border-gray-900 focus:outline-none"
//         />
//         <button
//           type="submit"
//           className="bg-red-800 text-white py-3 mt-4 w-full rounded-md hover:opacity-100 transition-opacity duration-200"
//         >
//           Enter
//         </button>
//       </form>
//       {
//         errorMessage && errorMessage
//       }
//       <div className="w-full text-center mt-5 flex justify-between text-sm">
//         <b>Don&apos;t have an account?</b>
//         <a href="#" className="font-extrabold text-red-800 hover:underline">
//           Sign up
//         </a>
//       </div>
//     </div>
//   </div>
//   )
// }

// export default LoginForm
'use client'
import { signIn } from 'next-auth/react';
import { useState } from 'react';

const LoginForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLoginUser = async (e) => {   
        e.preventDefault();
        if (isLoading) return;
        
        if (!email || !password) {
            setErrorMessage("Please fill all required fields");
            return;
        }

        try {
            setErrorMessage(null);
            setIsLoading(true);
            await signIn("credentials", {
                redirect: true,
                email,
                password,
                callbackUrl: '/'
            });
        } catch (error) {
            console.error(error);
            setIsLoading(false);
            setErrorMessage("Something went wrong. Please try again");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 w-72 flex flex-col items-center rounded-md shadow-lg">
                <div className="text-center mb-5">
                    <h1 className="text-2xl font-bold">
                        <span className="text-3xl text-red-800">L</span>OGIN
                    </h1>
                </div>
                <form onSubmit={handleLoginUser} className="w-full">
                    <label htmlFor="uname" className="block font-bold text-lg">Username</label>
                    <input
                        type="text"
                        name="uname"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="font-medium w-full p-1 mt-1 mb-2 border-b-2 border-gray-900 focus:outline-none"
                    />
                    <label htmlFor="psw" className="block font-bold text-lg mt-2">Password</label>
                    <input
                        type="password"
                        name="psw"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="font-medium w-full p-1 mt-1 mb-4 border-b-2 border-gray-900 focus:outline-none"
                    />
                    <button
                        type="submit"
                        className="bg-red-800 text-white py-3 mt-4 w-full rounded-md hover:opacity-100 transition-opacity duration-200"
                    >
                        Enter
                    </button>
                </form>
                {errorMessage && <p className="text-red-600 mt-2">{errorMessage}</p>}
                <div className="w-full text-center mt-5 flex justify-between text-sm">
                    <b>Don&apos;t have an account?</b>
                    <a href="#" className="font-extrabold text-red-800 hover:underline">Sign up</a>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
