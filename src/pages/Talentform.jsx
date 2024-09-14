import React, { useState } from "react";
import Header from "../components/Header";
import { Link } from 'react-router-dom';
import Select from "react-select";

const TalentForm = () => {
  const [selectedSkills, setSelectedSkills] = useState([]);

  const skillsOptions = [
    { value: "NodeJS", label: "NodeJS" },
    { value: "ReactJS", label: "ReactJS" },
    { value: "Angular", label: "Angular" },
    { value: "MongoDB", label: "MongoDB" },
    { value: "MySQL", label: "MySQL" },
    { value: "Python", label: "Python" },
    { value: "Java", label: "Java" },
    { value: "C++", label: "C++" },
    { value: "Ruby", label: "Ruby" },
    { value: "AWS", label: "AWS" },
  ];

  return (
    <>
    <Header/>
      <div className="flex flex-col md:flex-row bg-transparent text-white font-Aries">
        {/* Left Section - Info */}
        <div className="flex-1 p-5 md:p-12 lg:p-20 flex flex-col justify-center bg-transparent space-y-10"> 
          <h1 className="text-4xl md:text-6xl font-light mb-10 leading-relaxed">
            Become part of an <span className="text-purple-500">exclusive</span> network
          </h1> 
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <span className="text-3xl">&#x1F4B8;</span>
              <span className="text-xl md:text-2xl font-light">Transparent Compensation</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-3xl">&#x2705;</span>
              <span className="text-xl md:text-2xl font-light">Zero Commission</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-3xl">&#9881;&#xFE0F;</span>
              <span className="text-xl md:text-2xl font-light">AI Powered Job Match</span>
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="flex-1 p-5 md:p-10 lg:p-16 bg-transparent flex flex-col justify-center">
          <div className="border border-gray-700 p-6 rounded-lg max-w-2xl mx-auto bg-[#1a1a24]">
            <h2 className="text-3xl font-light mb-6 text-center">Let’s get you hired!</h2>
            <form className="space-y-6">
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label className="block text-gray-400 font-light">First Name*</label>
                  <input
                    type="text"
                    placeholder="John"
                    className="w-full p-3 bg-gray-800 font-Arial text-white rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>
                <div className="w-1/2">
                  <label className="block text-gray-400 font-light">Last Name*</label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full p-3 font-Arial bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>
              </div>

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
                <label className="block text-gray-400 font-light">Location*</label>
                <input
                  type="text"
                  placeholder="Bangalore, India"
                  className="w-full p-3 bg-gray-800 font-Arial text-white rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>

              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label className="block text-gray-400 font-light">Contact Number*</label>
                  <div className="flex">
                    <select className="bg-gray-800 font-Arial text-gray-400 p-3 rounded-l">
                      <option>+91</option>
                      {/* Add more country codes as needed */}
                    </select>
                    <input
                      type="tel"
                      placeholder="**********"
                      className="w-full p-3 bg-gray-800 text-white rounded-r font-Arial focus:outline-none focus:ring-2 focus:ring-purple-500"
                      required
                    />
                  </div>
                </div>

                <div className="w-1/2">
                  <label className="block text-gray-400 font-light">Years of Experience*</label>
                  <div className="flex space-x-2">
                    <input
                      type="number"
                      placeholder="E.g: 6"
                      className="w-1/2 p-3 bg-gray-800 text-white rounded font-Arial focus:outline-none focus:ring-2 focus:ring-purple-500"
                      required
                    />
                    <input
                      type="number"
                      placeholder="E.g: 3"
                      className="w-1/2 p-3 bg-gray-800 text-white font-Arial rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Technical Skills Multi-select Dropdown */}
              <div>
                <label className="block text-gray-400 font-light">My Technical Skills*</label>
                <Select
                  isMulti
                  value={selectedSkills}
                  onChange={setSelectedSkills}
                  options={skillsOptions}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  styles={{
                    control: (base) => ({
                      ...base,
                      backgroundColor: '#1a1a24',
                      borderColor: '#4a5568',
                    }),
                    menu: (base) => ({
                      ...base,
                      backgroundColor: '#1a1a24',
                    }),
                    option: (base, state) => ({
                      ...base,
                      backgroundColor: state.isFocused ? '#2d3748' : '#1a1a24',
                      color: 'white',
                      ':active': {
                        backgroundColor: '#4a5568',
                      },
                    }),
                    multiValue: (base) => ({
                      ...base,
                      backgroundColor: '#2d3748',
                      borderRadius: '20px',
                      color: 'white',
                    }),
                    multiValueLabel: (base) => ({
                      ...base,
                      color: 'white',
                    }),
                    multiValueRemove: (base) => ({
                      ...base,
                      color: 'white',
                      ':hover': {
                        backgroundColor: '#4a5568',
                        color: 'white',
                      },
                    }),
                  }}
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#6249bb] hover:bg-purple-600 text-white text-lg font-Arial rounded"
              >
                Continue
              </button>
              <Link to="/login">
                <button className="text-purple-500 hover:underline">Already have an account? Login</button>
              </Link>
              <p className="text-sm text-gray-400 mt-4 font-Arial">
                By submitting, you acknowledge that you have read and agreed to our{" "}
                <a href="#" className="underline">Terms of Service</a> and{" "}
                <a href="#" className="underline">Privacy Policy</a>.
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default TalentForm;