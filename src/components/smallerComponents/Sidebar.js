
import React from "react";

import { Link } from "react-router-dom";

import monkeyLogo from '../../assets/logo.png'



export const Sidebar = () => {
  
  return (
    <div
    className="w-[300px] self-start bg-gradient-to-r from-[#a56d6d] flex flex-col items-center px-16 m-4 rounded-lg pb-8"
    >
      <div className="flex flex-row items-center justify-center p-4">
        <h1 className="font-bold text-base text-white text-4xl mr-2 mb-4">Music Monkey</h1>

        <img
        src={monkeyLogo}
        alt="monkey logo"
        className="w-[50px] ml-2"
        />
      </div>


      <Link
      to="/"
      className="hover:bg-[#b85f5f] mb-4 text-xl font-bold text-white"
      >
        Discover
      </Link>

      <Link
      to="/around-you"
      className="hover:bg-[#b85f5f] mb-4 text-xl font-bold text-white"
      >
        Around You
      </Link>

      <Link
      to="/top-artists"
      className="hover:bg-[#b85f5f] mb-4 text-xl font-bold text-white"
      >
        Top Artists
      </Link>

      <Link
      to="/top-charts"
      className="hover:bg-[#b85f5f] mb-4 text-xl font-bold text-white"
      >
        Top Charts
      </Link>

    </div>
  )
}