import React from 'react';

const LeftSection = () => {
  return (
    <div className="flex-1 p-5 flex flex-col justify-center bg-transparent space-y-8 md:space-y-10">
      {/* Adjust the heading size based on screen size */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-snug md:leading-relaxed text-center md:text-left">
        Become part of an <span className="text-purple-500">exclusive</span> network
      </h1>

      {/* Container for the features */}
      <div className="space-y-6 sm:space-y-8">
        {/* Feature 1 */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          <span className="text-2xl sm:text-3xl">&#x1F4B8;</span>
          <span className="text-lg sm:text-xl md:text-2xl font-light">Transparent Compensation</span>
        </div>
        
        {/* Feature 2 */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          <span className="text-2xl sm:text-3xl">&#x2705;</span>
          <span className="text-lg sm:text-xl md:text-2xl font-light">Zero Commission</span>
        </div>
        
        {/* Feature 3 */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          <span className="text-2xl sm:text-3xl">&#9881;&#xFE0F;</span>
          <span className="text-lg sm:text-xl md:text-2xl font-light">AI Powered Job Match</span>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;