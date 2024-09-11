import React from "react";

function LoginPage() {
  return (
    <div
      className="text-white min-h-screen relative"
      style={{
        backgroundColor: "#0b0b15",
        backgroundImage: "linear-gradient(to bottom, #0a0a12, #0b0b15)",
      }}
    >
      {/* Text Section */}
      <div className="absolute left-20 top-0 bottom-0 flex items-center p-6">
        <div className="max-w-2xl space-y-8 text-left">
          <h1 className="text-4xl md:text-7xl font-bold text-white font-Arial">
            Welcome Back! <span className="text-purple-500">Login to your account</span>
          </h1>
        </div>
      </div>

      {/* Form Section */}
      <div className="absolute right-20 top-0 bottom-0 flex items-center justify-center w-full md:w-1/2">
        <div className="w-full max-w-2xl min-h-[600px] bg-black p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-white mb-6 text-left font-Arial">
            Login to Your Account
          </h2>
          <div className="flex justify-between items-center mb-6">
            <img 
              src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-sva-scholarship-20.png" 
              alt="Google" 
              className="h-10 cursor-pointer" 
              onClick={() => window.location.href = "https://your-backend.com/auth/google"}
            />
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg" 
              alt="LinkedIn" 
              className="h-10 cursor-pointer" 
              onClick={() => window.location.href = "https://your-backend.com/auth/linkedin"}
            />
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
            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full mb-3 p-5 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-purple-700 hover:bg-purple-600 text-white text-xl font-Arial font-bold py-5 rounded"
            >
              Login
            </button>
            <p className="text-l mt-4 text-gray-400">
              By logging in, you acknowledge that you have read and agreed to our{" "}
              <a href="#" className="underline">Terms of Service</a> and{" "}
              <a href="#" className="underline">Privacy Policy</a>.
            </p>
          </form>
          <div className="mt-6 text-center">
            <a href="/signup" className="text-purple-500 text-xl hover:underline">Don't have an account? Sign Up</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
