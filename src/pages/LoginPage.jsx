import React from "react";
import Header from "../components/Header";
import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <div
      className="flex flex-col md:flex-row min-h-screen relative bg-gradient-to-b from-[#07030d] to-[#100725] text-white"
    >
      <Header />
      {/* Text Section */}
      <div className="md:w-1/2 flex items-center p-6 md:p-12">
        <div className="max-w-2xl space-y-6 text-left">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold">
            Welcome Back! <span className="text-purple-500">Login to your account</span>
          </h1>
        </div>
      </div>

      {/* Form Section */}
      <div className="w-full md:w-1/2 flex mt-9 items-center justify-center px-4">
        <div className="w-full max-w-2xl min-h-[600px] bg-black p-6 md:p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4 md:mb-6 text-left font-Arial">
            Login to Your Account
          </h2>

          <div className="flex justify-between items-center mb-6">
            <Link to="/profile" aria-label="Sign in with Google">
              <button>
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png" alt="Google logo" className="h-10" />
              </button>
            </Link>
            <Link to="/profile" aria-label="Sign in with LinkedIn">
              <button>
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg" alt="LinkedIn logo" className="h-10" />
              </button>
            </Link>
          </div>

          <div className="text-center text-gray-400 text-base sm:text-lg mb-6 md:mb-8">or</div>

          <form className="space-y-4 md:space-y-6">
            <div>
              <input
                type="email"
                placeholder="name@work.com"
                className="w-full mb-3 p-4 sm:p-5 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
                aria-label="Email"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full mb-3 p-4 sm:p-5 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
                aria-label="Password"
              />
            </div>
            <Link to='/profile'>
              <button
                type="submit"
                className="w-full bg-purple-700 hover:bg-purple-600 text-white text-lg sm:text-xl font-Arial font-bold py-4 sm:py-5 rounded"
              >
                Login
              </button>
            </Link>
            <p className="text-base sm:text-lg mt-4 text-gray-400">
              By logging in, you acknowledge that you have read and agreed to our{" "}
              <a href="#" className="underline">Terms of Service</a> and{" "}
              <a href="#" className="underline">Privacy Policy</a>.
            </p>
          </form>

          <div className="mt-6 text-center">
            <Link to="/signup">
              <button className="text-purple-500 hover:underline">Don't have an account? Sign Up</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
