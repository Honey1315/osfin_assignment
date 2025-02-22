import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedEmail = localStorage.getItem('userEmail');
    if (storedEmail) {
      navigate('/booking');
    }
  }, [navigate]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (rememberMe) {
      localStorage.setItem('userEmail', email);
      sessionStorage.setItem('userEmail', email);
    } else {
      sessionStorage.setItem('userEmail', email);
      localStorage.removeItem('userEmail');
    }
    navigate('/booking');
  };

  return (
    <div className="flex h-screen w-screen">
      {/* Image Container */}
      <div className="w-1/2 h-full bg-gray-200">
        <img
          src="/assets/images/woman_in_plane.jpg"
          alt="Login Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Form Container */}
      <div className="w-1/2 h-full flex flex-col justify-center items-center bg-white shadow-lg">
        {/* Logo */}
        <div className='flex p-6 border border-gray-300 gap-3'>
            <img src='/assets/svgs/Subtract.svg' alt='?'/>
            <h1 className='flex items-center text-black font-sans text-xl font-bold leading-9'>TrailBliss</h1>
        </div>

        {/* Heading */}
        <h2 className="text-[#1A1A1A] text-xl font-semibold font-['Open_Sans'] leading-7 normal-case">Nice to see you again</h2>

        {/* Form */}
        <form className="w-3/4" onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="text-black text-sm font-semibold font-open-sans leading-none">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter Email address"
              className="shadow appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline rounded-md bg-gray-200"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label htmlFor="password" className="text-black text-sm font-semibold font-open-sans leading-none">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                id="password"
                placeholder="Enter Password"
                className="shadow appearance-none w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline rounded-md bg-gray-200"
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Remember Me and Forgot Password */}
          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center text-sm">
              <input
                type="checkbox"
                className="mr-2"
                checked={rememberMe}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRememberMe(e.target.checked)}
              />
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
          <a href="#" className="text-blue-500 hover:text-blue-800" onClick={() => navigate('/booking')}>
            Go to platform
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
