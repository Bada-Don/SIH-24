import React from "react";
import { Link } from 'react-router-dom';
import Header from "../components/Header.jsx";

function App() {
  return (
    <div
      className="text-white min-h-screen relative"
      style={{
        backgroundColor: "#0b0b15",
        backgroundImage: "linear-gradient(to bottom, #0a0a12, #0b0b15)",
      }}
    >
      <Header/>
      {/* Text Section */}
      <div className="absolute left-20 top-0 bottom-0 flex items-center p-6">
        <div className="max-w-2xl space-y-8 text-left">
          <h1 className="text-6xl md:text-5xl font-bold text-white leading-tight">
            Get the <span className="text-purple-500">best engineering minds</span> to bring your product vision to life.
          </h1>
        </div>
      </div>

      {/* Form Section */}
      <div className="absolute right-20 top-0 bottom-0 flex items-center justify-center w-full md:w-1/2">
        <div className="w-full max-w-2xl min-h-[600px] bg-black p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-white mb-6 text-left">
            Connect with Top Engineers
          </h2>
          <div className="flex justify-between items-center mb-6">
            <Link to="/profile">
              <button>
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png" alt="Google" className="h-10" />
              </button>
            </Link>
            <Link to="/profile">
              <button>
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg" alt="LinkedIn" className="h-10" />
              </button>
            </Link>

          </div>
          <div className="text-center text-gray-400 text-xl mb-8">or</div>
          <form className="space-y-6">
            <div>
              <input
                type="email"
                placeholder="name@work.com"
                className="w-full mb-3 p-5 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
            <Link to='/profile'>
              <button
                type="submit"
                className="w-full bg-purple-700 hover:bg-purple-600 text-white font-bold py-5 rounded"
              >
                Sign Up
              </button>
            </Link>
            <p className="text-sm mt-4 text-gray-400">
              By submitting, you acknowledge that you have read and agreed to our{" "}
              <a href="#" className="underline">Terms of Service</a> and{" "}
              <a href="#" className="underline">Privacy Policy</a>.
            </p>
          </form>
          <div className="mt-6 text-center">
            <Link to="/login">
              <button className="text-purple-500 hover:underline">Already have an account? Login</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
