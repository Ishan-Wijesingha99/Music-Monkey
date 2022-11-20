import React from "react";
import { Discover } from "./pages/Discover";
import { Sidebar } from "./smallerComponents/Sidebar";

import { Route, Routes } from 'react-router-dom';
import { TopArtists } from "./pages/TopArtists";
import { TopCharts } from "./pages/TopCharts";
import { AroundYou } from "./pages/AroundYou";
import { TopPlay } from "./smallerComponents/TopPlay";




export const App = () => {
  return (
    <div className="flex flex-row justify-between">

      <Sidebar />

      <div className="flex flex-col justify-center items-center">
        <Routes>
          <Route path="/" element={<Discover />} />
          <Route path="/top-artists" element={<TopArtists />} />
          <Route path="/top-charts" element={<TopCharts />} />
          <Route path="/around-you" element={<AroundYou />} />
        </Routes>
      </div>

    
      <TopPlay />
      
    </div>
    
  )
}