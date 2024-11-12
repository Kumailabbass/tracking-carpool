import React from 'react'

const LoginForm = () => {
  return (
    <div className="flex items-center  justify-center min-h-screen bg-gray-100">
    <div className="bg-white p-6 w-72 flex flex-col items-center rounded-md shadow-lg">
      <div className="text-center mb-5">
        <h1 className="text-2xl font-bold">
          <span className="text-3xl text-red-800">L</span>OGIN
        </h1>
      </div>
      <form className="w-full">
        <label htmlFor="uname" className="block font-bold text-lg">
          Username
        </label>
        <input
          type="text"
          name="uname"
          required
          className="font-medium w-full p-1 mt-1 mb-2 border-b-2 border-gray-900 focus:outline-none"
        />
        <label htmlFor="psw" className="block font-bold text-lg mt-2">
          Password
        </label>
        <input
          type="password"
          name="psw"
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
      <div className="w-full text-center mt-5 flex justify-between text-sm">
        <b>Don&apos;t have an account?</b>
        <a href="#" className="font-extrabold text-red-800 hover:underline">
          Sign up
        </a>
      </div>
    </div>
  </div>
  )
}

export default LoginForm