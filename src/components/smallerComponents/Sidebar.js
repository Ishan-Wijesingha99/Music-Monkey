
import React from "react";

import { Link } from "react-router-dom";

import monkeyLogo from '../../assets/logo.png'

import { useSelector } from "react-redux";



export const Sidebar = () => {

  const { isActive, isPlaying } = useSelector(state => state.player)

  
  return (
    <div
    className="w-[300px] self-start bg-gradient-to-r from-[#a56d6d] flex flex-col m-4 rounded-lg pb-8"
    >
      <div className="flex flex-row items-center justify-center py-4">
        <h1 className="font-signature text-base text-white text-2xl tracking-widest mr-2">MUSIC MONKEY</h1>

        <img
        src={monkeyLogo}
        alt="monkey logo"
        className={`w-[50px] ml-2 ${isPlaying && isActive ? 'animate-[spin_3s_linear_infinite]' : ''}`}
        />
      </div>


      <Link
      to="/"
      className="hover:bg-gradient-to-r hover:from-[#292828] text-2xl font-signature text-white p-4 rounded-lg tracking-widest ml-4"
      >
        Discover
      </Link>

      <Link
      to="/around-you"
      className="hover:bg-gradient-to-r hover:from-[#292828] text-2xl font-signature text-white p-4 rounded-lg tracking-widest ml-4"
      >
        Around You
      </Link>

      <Link
      to="/top-artists"
      className="hover:bg-gradient-to-r hover:from-[#292828] text-2xl font-signature text-white p-4 rounded-lg tracking-widest ml-4"
      >
        Top Artists
      </Link>

      <Link
      to="/top-charts"
      className="hover:bg-gradient-to-r hover:from-[#292828] text-2xl font-signature text-white p-4 rounded-lg tracking-widest ml-4"
      >
        Top Charts
      </Link>

    </div>
  )
}