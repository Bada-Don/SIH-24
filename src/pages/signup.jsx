import React from "react";
import { Link } from 'react-router-dom';
import Header from "../components/Header.jsx";

function App() {
  return (
    <>
      <Header />
      <div
        className="flex xl:flex-row max-sm:flex-col md:gap-6 items-center md:flex-col justify-center lg:p-10 max-xl:p-0 text-white h-fit relative"
        style={{
          backgroundColor: "black",
        }}
      >
        {/* Text Section */}
        <div className="space-y-8 xl:text-left 2xl:w-[45%] max-md:w-full md:text-center max-md:my-8 md:w-[80%]">
          <h1 className="max-sm:text-3xl max-sm:text-center xl:text-7xl lg:text-5xl w-full font-bold text-white md:text-5xl ">
            Get the <span className="text-purple-500">best engineering minds</span> to bring your product vision to life.
          </h1>
        </div>

        {/* Form Section */}
        <div className="flex items-center justify-center max-md:w-[90%]">
          <div className="w-full h-fit border flex flex-col gap-6 max-md:gap-3 border-gray-700 max-w-2xl bg-[#1a1a24] p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-light  text-center">
              Let's get you Signed In
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

export default App;
