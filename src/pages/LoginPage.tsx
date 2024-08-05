import React from 'react'
import bgImage from "../assets/Top view roasted coffee beans with cinnamon.png";
import bg2Image from "../assets/CoffeeBeans2.png";
import { useState } from "react";

const countries = [
  "United States",
  "Canada",
  "United Kingdom",
  "Australia",
  "Germany",
];

const LoginPage = () => {
  const [selectedCountry, setSelectedCountry] = useState("");

  const handleChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div
        className="w-[1100px] h-[580px] bg-opacity-90 backdrop-blur-lg shadow-lg flex max-w-7xl rounded-3xl"
        style={{ backgroundImage: `url(${bg2Image})` }}
      >
        <div className="relative w-1/2 p-4 flex items-center justify-center">
          <div className="absolute inset-0 rounded-bl-3xl rounded-tl-3xl bg-black opacity-50"></div>
          <div className="flex flex-col items-center justify-center z-10">
            <h1 className="text-3xl font-bold mb-4 text-white">CAFÉ</h1>
            <h1 className="text-3xl font-bold mb-4 text-white">CONNEXION</h1>
          </div>
        </div>
        <div className="w-1/2 flex flex-col gap-16 rounded-br-3xl rounded-tr-3xl bg-white">
          <div className="flex items-center justify-center w-36 border-2 float-right rounded-lg border-grey ml-96 mt-3">
            <label
              htmlFor="country"
              className="block text-sm font-medium text-gray-700"
            ></label>
            <select
              id="country"
              name="country"
              value={selectedCountry}
              onChange={handleChange}
              className="mt-1 block w-[130px] pl-3 py-1 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-md rounded-md"
            >
              <option value="" disabled>
                Select a country
              </option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-lg font-bold text-[#c67c4e] mb-4">WELCOME BACK!</h2>
            <p className="mb-4 text-lg">Please enter your login information</p>
            <form>
              <div className="mb-4 w-[336px]">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 h-[52px] block w-full p-2 bg-[#f3f4f6] rounded-md"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="mt-1 h-[52px] block w-full p-2 bg-[#f3f4f6] rounded-md"
                />
              </div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember"
                    className="h-4 w-4 text-[#c67c4e] border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-[#c67c4e] hover:text-orange-500"
                  >
                    Forgot Password?
                  </a>
                </div>
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 h-[52px] bg-[#c67c4e] text-white font-medium rounded-lg hover:bg-orange-700"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
