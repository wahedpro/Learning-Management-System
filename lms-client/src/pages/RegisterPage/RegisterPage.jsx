import React from 'react'
import { NavLink } from 'react-router'

function RegisterPage() {
  return (
    <div className="py-10 flex items-center justify-center bg-gray-100">
      <div className="bg-white p-5 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Create Your Account</h2>
        <form>
          {/* Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 w-full p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 w-full p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 w-full p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="px-5 bg-blue-700 text-white py-1 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Register
          </button>
          <p className="text-center py-2 ">
                Already have an account?{" "}
                <NavLink to="/login" className="text-blue-400">
                    Login Now
                </NavLink>
            </p>
        </form>
      </div>
    </div>
  )
}

export default RegisterPage