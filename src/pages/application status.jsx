import React from "react";
import Header from "../components/Header.jsx";
import { Link } from 'react-router-dom';

const JobAppStat = () => {
  return (
    <div>
      <Header />
      <div className="min-h-screen bg-black text-white p-6 md:px-12">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl md:text-3xl">Junior Frontend Developer at Cricbuzz</h1>
          <Link to='/jobs'>
          <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded text-white">
            All Jobs
          </button>
          </Link>
        </div>

        {/* Application Status Tracker */}
        <div className="border border-gray-700 rounded-lg p-6 mb-6">
          <h2 className="text-lg md:text-xl font-semibold mb-4">Application Status Tracker</h2>
          <div className="flex items-center space-x-4 flex-wrap">
            <div className="flex items-center space-x-2">
              <span className="w-6 h-6 bg-green-500 rounded-full"></span>
              <p>Applied</p>
            </div>
            <div className="h-1 w-10 bg-gray-600"></div>
            <div className="flex items-center space-x-2">
              <span className="w-6 h-6 bg-green-500 rounded-full"></span>
              <p>Reviewed by Replo</p>
            </div>
            <div className="h-1 w-10 bg-gray-600"></div>
            <div className="flex items-center space-x-2">
              <span className="w-6 h-6 bg-gray-500 rounded-full"></span>
              <p>Recommended to Client</p>
            </div>
            <div className="h-1 w-10 bg-gray-600"></div>
            <div className="flex items-center space-x-2">
              <span className="w-6 h-6 bg-gray-500 rounded-full"></span>
              <p>Interviews in Progress</p>
            </div>
            <div className="h-1 w-10 bg-gray-600"></div>
            <div className="flex items-center space-x-2">
              <span className="w-6 h-6 bg-gray-500 rounded-full"></span>
              <p>Hired</p>
            </div>
          </div>
        </div>

        {/* Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Skills Card */}
          <div className="border border-gray-700 p-6 rounded-lg bg-black">
            <h3 className="text-lg font-semibold mb-4">Technical Skills Added</h3>
            <p className="text-gray-400 mb-4">Required skills for the role exist.</p>
            <Link to='/profile'>
            <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-white">
              Add Skills
            </button>
            </Link>
          </div>

          {/* Resume Card */}
          <div className="border border-red-700 p-6 rounded-lg bg-black">
            <h3 className="text-lg font-semibold mb-4 text-red-500">Resume Incomplete</h3>
            <p className="text-gray-400 mb-4">Total Resume Score: 40%<br />Resume Must-Have Score: 50%</p>
            <Link to='/profile'>
            <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-white">
              Complete Resume
            </button>
            </Link>
          </div>
        </div>

        {/* Job Details Section */}
        <div className="border border-gray-700 rounded-lg bg-black p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Here are the job details of the role</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Job Details</h3>
              <p className="text-gray-400">ReactJS, Web Frontend, Junior</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">About the Client</h3>
              <p className="text-gray-400">Cricbuzz.com, based in Bengaluru, India, revolutionizes cricket coverage with real-time commentary and original content.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Your role</h3>
              <ul className="text-gray-400 list-disc pl-6">
                <li>Develop user-facing features using ReactJS</li>
                <li>Collaborate with backend developers</li>
                <li>Optimize applications for speed and scalability</li>
                <li>Implement responsive designs</li>
                <li>Stay updated on emerging technologies</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Hiring process</h3>
              <ol className="text-gray-400 list-decimal pl-6">
                <li>Profile shortlisting</li>
                <li>Tech interview</li>
                <li>Automated coding</li>
                <li>Technical fit</li>
                <li>General culture fit</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobAppStat;
