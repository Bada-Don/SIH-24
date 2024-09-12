import React, { useState } from "react";
import Header from "../components/Header"; 

function App() {
  // State to handle form submission and validation
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Form validation and submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic email validation
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  return (
    <div className="bg-[#0b0b15] min-h-screen text-white">
      {/* Header Component */}
      <Header />

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-b from-[#07030d] to-[#100725]">
        {/* Text Section */}
        <div className="md:w-1/2 flex items-center justify-center px-6 md:px-12 py-10 md:py-0 animate-fade-in">
          <div className="max-w-xl space-y-6 text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-Swis">
              Get the <span className="text-[#8965d0] font-Arial">best engineering minds</span> to bring your product vision to life.
            </h1>
          </div>
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 flex items-center justify-center px-4">
          <div className="w-full max-w-2xl min-h-[500px] md:min-h-[600px] bg-black p-6 md:p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl sm:text-3xl mb-4 md:mb-6 text-left">
              {submitted ? "Thank You!" : "Connect with Top Engineers"}
            </h2>

            {!submitted ? (
              <>
                <div className="flex justify-between items-center mb-6">
                  <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png" alt="Google" className="h-8 sm:h-10 hover:scale-105 transition-transform duration-300" />
                  </a>
                  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg" alt="LinkedIn" className="h-8 sm:h-10 hover:scale-105 transition-transform duration-300" />
                  </a>
                </div>

                <div className="text-center text-gray-400 text-base-xl font-Arial sm:text-lg mb-6 md:mb-8">or</div>

                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  <div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@work.com"
                      className="w-full mb-3 p-4 sm:p-5 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                      required
                    />
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-b from-[#8484b5] to-[#82829a] font-Arial text-2xl hover:bg-indigo-900 text-black font-bold py-4 sm:py-5 rounded transition-transform transform hover:scale-105"
                  >
                    Hire Now
                  </button>
                  <p className="text-sm sm:text-base mt-4 text-gray-400">
                    By submitting, you acknowledge that you have read and agreed to our{" "}
                    <a href="#" className="underline">Terms of Service</a> and{" "}
                    <a href="#" className="underline">Privacy Policy</a>.
                  </p>
                </form>
              </>
            ) : (
              <p className="text-lg text-gray-400">We will get in touch with you soon!</p>
            )}

            {!submitted && (
              <div className="mt-6 text-center">
                <a href="/login" className="text- hover:underline">Already have an account? Login</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
