
import React from "react";

import { Link } from "react-router-dom";



export const Sidebar = () => {
  
  return (
    <div
    className="w-[240px] self-start bg-gradient-to-t from-red-300 to-rose-400 flex flex-col items-center px-16 m-4 rounded-lg"
    >
      <Link to="/">Discover</Link>
      <Link to="/around-you">Around You</Link>
      <Link to="/top-artists">Top Artists</Link>
      <Link to="/top-charts">Top Charts</Link>
    </div>
  )
}