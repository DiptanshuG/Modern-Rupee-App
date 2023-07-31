import React from "react";
import { FaUser, FaLock } from "react-icons/fa";
import logo from "../assets/images/transparent-logo.png";

const Login = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left Section */}
      <div className="md:w-1/2 bg-orange-500 text-white p-10 flex items-center justify-center">
        <div>
          {/* Logo Image */}
          <img src={logo} alt="Logo" className="mx-auto mb-6 w-50 h-50" />

          <h1 className="text-4xl font-bold mb-6">Welcome Back!</h1>

          <p className="text-lg">
            Choose a job you love, and you will never have to work a day in your
            life.{" "}
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 p-10 flex items-center justify-center">
        <form className="w-full max-w-sm">
          <div className="mb-6">
            <label
              htmlFor="username"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Username
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <FaUser className="h-5 w-5 text-gray-500" />
              </span>
              <input
                type="text"
                id="username"
                name="username"
                className="block w-full py-2 pl-10 pr-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter your username"
              />
            </div>
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <FaLock className="h-5 w-5 text-gray-500" />
              </span>
              <input
                type="password"
                id="password"
                name="password"
                className="block w-full py-2 pl-10 pr-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter your password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-orange-600 hover:text-orange-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <button
            type="submit"
            className="mt-4 w-full bg-orange-600 text-white p-2 rounded-md hover:bg-orange-500"
          >
            Login
          </button>

          <div className="text-center mt-4">
            <p className="text-sm">
              Don't have an account?
              <a
                href="#"
                className="font-medium text-orange-600 hover:text-orange-500 ml-1"
              >
                Register now
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
