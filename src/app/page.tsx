'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Login = () => {
  const router = useRouter();
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [showHelp, setShowHelp] = useState(false);
  const currentYear = new Date().getFullYear();
 
  useEffect(() => {
    setShowHelp(true);
  }, []);
  
  const handleLogin = () => {
    if (number === "123456789" && password === "12345") {
      router.push("/list"); 
    } else {
      alert("Number or password is incorrect");
    }
  };

  return (
    <div className="flex justify-center bg-white h-screen w-screen">

      {showHelp && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-2xl max-w-md mx-4">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Demo Login Credentials</h2>
            <div className="space-y-3 text-gray-600">
              <p><span className="font-semibold">Phone Number:</span> 123456789</p>
              <p><span className="font-semibold">Password:</span> 12345</p>
            </div>
            <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-yellow-800">
                This is a demo login portal for my portfolio. Use the credentials above to explore.
              </p>
            </div>
            <button
              onClick={closeHelp}
              className="mt-6 w-full bg-gray-700 text-white py-2 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Got it!
            </button>
          </div>
        </div>
      )}
      
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

        <button
          onClick={() => setShowHelp(true)}
          className="mt-4 text-sm text-gray-500 hover:text-gray-700 underline"
        >
          Forgot credentials?
        </button>
        
      </div>
      <div className="mt-[40%]">
       <p className="text-black">&copy; {currentYear} Syed Kumail Abbas. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Login;
