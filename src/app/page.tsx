'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Login = () => {
  const router = useRouter();
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (number === "123456789" && password === "12345") {
      router.push("/list"); 
    } else {
      alert("Number or password is incorrect");
    }
  };

  return (
    <div className="flex justify-center bg-white h-screen w-screen">
      <div className="h-[310px] w-[350px] bg-white absolute flex flex-col items-center mt-[110px] rounded-xl shadow-2xl">
        <p className="text-gray-400 text-[60px] font-sans m-3">LOGO</p>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Phone Number"
          className="mt-4 p-2 w-[80%] h-[12%] text-black rounded-xl border border-gray-400 outline-none focus:ring-2 focus:ring-gray-400 appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="mt-4 p-2 w-[80%] h-[12%] text-black rounded-xl border border-gray-400 outline-none focus:ring-2 focus:ring-gray-400"
        />
        <button
          className="mt-6 p-2 w-[80%] h-[12%] border-none bg-gray-700 text-white rounded-xl"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
      <div className="mt-[40%]">
       <p>&copy; {currentYear} Syed Kumail Abbas. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Login;
