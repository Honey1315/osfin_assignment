import React from 'react';

const Login: React.FC = () => {
  return (
    <div className="flex h-screen w-screen">
      {/* Image Container */}
      <div className="w-1/2 h-full bg-gray-200">
        <img
          src="/assets/images/woman_in_plane.jpg" // Replace with your image URL
          alt="Login Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Form Container */}
      <div className="w-1/2 h-full flex flex-col justify-center items-center bg-white shadow-lg">
        {/* Logo */}
        <div className="text-2xl font-bold mb-8">
          <span className="text-black">Trailbliss</span>
        </div>

        {/* Heading */}
        <h2 className="text-xl mb-6 text-gray-700">Nice to see you again</h2>

        {/* Form */}
        <form className="w-3/4">
          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter Email address"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                id="password"
                placeholder="Enter Password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              />
              {/* <span className="absolute inset-y-0 right-0 px-4 flex items-center text-gray-600 cursor-pointer">
                👁️
              </span> */}
            </div>
          </div>

          {/* Remember Me and Forgot Password */}
          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center text-sm">
              <input type="checkbox" className="mr-2" />
              <span className="text-gray-700">Remember me</span>
            </label>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Forgot password?
            </a>
          </div>

          {/* Login Button */}
          <button
            className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="submit"
          >
            Login
          </button>
        </form>

        {/* Continue Without Login */}
        <div className="mt-8">
          Continue without login?{' '}
          <a href="#" className="text-blue-500 hover:text-blue-800">
            Go to platform
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
