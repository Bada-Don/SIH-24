import React from "react";

function App() {
  return (
    <div
      className="text-white min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-b from-[#0a0a12] to-[#0b0b15]"
    >
      {/* Text Section */}
      <div className="md:w-1/2 flex items-center justify-center px-6 md:px-12 py-10 md:py-0">
        <div className="max-w-xl space-y-6 text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-Arial">
            Get the <span className="text-purple-500">best engineering minds</span> to bring your product vision to life.
          </h1>
        </div>
      </div>

      {/* Form Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-4">
        <div className="w-full max-w-2xl min-h-[500px] md:min-h-[600px] bg-black p-6 md:p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl sm:text-3xl font- mb-4 md:mb-6 text-left">
            Connect with Top Engineers
          </h2>

          <div className="flex justify-between items-center mb-6">
            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png" alt="Google" className="h-8 sm:h-10" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg" alt="LinkedIn" className="h-8 sm:h-10" />
            </a>
          </div>

          <div className="text-center text-gray-400 text-base sm:text-lg mb-6 md:mb-8">or</div>

          <form className="space-y-4 md:space-y-6">
            <div>
              <input
                type="email"
                placeholder="name@work.com"
                className="w-full mb-3 p-4 sm:p-5 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-purple-700 hover:bg-purple-600 text-white font-bold py-4 sm:py-5 rounded"
            >
              Hire Now
            </button>
            <p className="text-sm sm:text-base mt-4 text-gray-400">
              By submitting, you acknowledge that you have read and agreed to our{" "}
              <a href="#" className="underline">Terms of Service</a> and{" "}
              <a href="#" className="underline">Privacy Policy</a>.
            </p>
          </form>

          <div className="mt-6 text-center">
            <a href="/login" className="text-purple-500 hover:underline">Already have an account? Login</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
