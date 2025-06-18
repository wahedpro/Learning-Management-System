import { NavLink } from 'react-router'

function LoginPage() {
  return (
    <div className="flex items-center justify-center bg-gray-100 py-14">
      <div className="bg-white p-5 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-xl font-bold text-center mb-6">Login to Your Account</h2>
        <form>
          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              className="mt-1 w-full p-1  border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              className="mt-1 w-full p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="px-5 bg-blue-700 text-white py-1 hover:bg-blue-600 transition duration-200"
          >
            Login
          </button>
          <p className="text-center mt-5">
                    Do not have an account? <NavLink to="/register" className="text-blue-700">Register Now</NavLink>
                </p>
        </form>
      </div>
    </div>
  )
}

export default LoginPage