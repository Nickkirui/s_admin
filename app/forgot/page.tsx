import React from 'react'
import Link from 'next/link'

const Forgot = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
    <div className="w-full p-6 bg-white rounded-md shadow-md lg:max-w-xl">
      <h1 className="text-3xl font-bold text-center text-gray-700">SONGA</h1>
      <p>Login</p>
      <form className="mt-6">
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-gray-800"
            
          >
            Email
          </label>
          <input
            type="email"
            placeholder="name@examples.com"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <div className="mb-2">
        <label
            htmlFor="password"
            
            className="block text-sm font-semibold text-gray-800"
          >
            Password
          </label>
          <input
            type="password"
            placeholder="password"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        
        <div className="mt-2">
          <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-700 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600">
            Login
            </button>
        </div>
      </form>

      <p className="mt-4 text-sm text-center text-gray-700">
        Remember me{" "}
        <Link
          href="/forgot"
          className="font-medium text-blue-600 "
        >
          Forgot Password?
        </Link>
      </p>
    </div>
  </div>
  )
}

export default Forgot