import React from "react";
import { Link } from 'react-router-dom';
import Header from "../components/Header.jsx";
function LoginPage() {
  return (
    <>
      <Header />
      <div
        className="flex flex-row items-center max-md:flex-col justify-center lg:p-10 max-xl:p-0 text-white h-fit relative"
        style={{
          backgroundColor: "black",
        }}
      >
        {/* Text Section */}
          <div className="space-y-8 text-left w-[45%] max-md:w-full max-md:text-center max-md:my-8">
            <h1 className="text-7xl max-lg:text-6xl w-full font-bold text-white max-md:text-4xl">
              Welcome Back! <br /> <span className="text-purple-500">Login to your account</span>
            </h1>
          </div>
       

        {/* Form Section */}
        <div className="flex items-center justify-center max-md:w-[90%]">
          <div className="w-full h-fit border flex flex-col gap-6 max-md:gap-3 border-gray-700 max-w-2xl bg-[#1a1a24] p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-light  text-center">
              Login to Your Account
            </h2>
            <div className="flex justify-between items-center ">
              <Link to="/profile">
                <button>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png" alt="Google" className="h-10" />
                </button>
              </Link>
              <Link to="/profile">
                <button>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/a/aa/LinkedIn_2021.svg" alt="LinkedIn" className="h-10" />
                </button>
              </Link>
            </div>
            <div className="text-center text-gray-400 text-3xl leading-3">or</div>
            <form className="space-y-6">

              <div>
                <label className="block text-gray-400 font-light">Email ID*</label>
                <input
                  type="email"
                  placeholder="name@mail.com"
                  className="w-full p-3 bg-gray-800 font-Arial text-white rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-400 font-light">Enter Password*</label>
                <input
                  type="password"
                  placeholder="Your Password"
                  className="w-full p-3 bg-gray-800 font-Arial text-white rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />

              </div>

              <Link to='/profile'>
                <button
                  type="submit"
                  className=" mt-6 w-full py-3 bg-purple-700 hover:bg-purple-600 text-white text-lg font-Arial rounded"
                >
                  Continue
                </button>
              </Link>
              <p className="text-l text-gray-400">
                By logging in, you acknowledge that you have read and agreed to our{" "}
                <a href="#" className="underline">Terms of Service</a> and{" "}
                <a href="#" className="underline">Privacy Policy</a>.
              </p>
            </form>
            <div className=" text-center">
              <Link to="/talent">
                <button className="text-purple-500 hover:underline">Don't have an account? Sign Up</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
