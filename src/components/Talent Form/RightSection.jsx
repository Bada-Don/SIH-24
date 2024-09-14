import React from 'react';
import SkillSelector from './SkillSelector';
import { Link } from 'react-router-dom';

const RightSection = () => {
    return (
        <div className="flex-1 p-5 md:p-5 bg-transparent flex flex-col justify-center">
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
                        <label className="block text-gray-400 font-light">Enter Password*</label>
                        <input
                            type="password"
                            placeholder="Set Password"
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
                    <SkillSelector />
                    <Link>
                        <br />
                        <button
                            type="submit"
                            className="w-full py-3 bg-purple-700 hover:bg-purple-600 text-white text-lg font-Arial rounded"
                        >
                            Continue
                        </button>
                    </Link>
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
    );
};

export default RightSection;