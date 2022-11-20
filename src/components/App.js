import React from "react";
import { Discover } from "./pages/Discover";
import { Sidebar } from "./smallerComponents/Sidebar";

import { Route, Routes } from 'react-router-dom';
import { TopArtists } from "./pages/TopArtists";
import { TopCharts } from "./pages/TopCharts";
import { AroundYou } from "./pages/AroundYou";
import { TopPlay } from "./smallerComponents/TopPlay";
import { useSelector } from "react-redux";

import MusicPlayer from "./musicPlayer";
import Searchbar from "./SearchBar";




export const App = () => {

  const { activeSong } = useSelector(state => state.player)


  return (
    <div className="relative flex">

      <Sidebar />



      <div className="flex-1 flex flex-col bg-rose-800">
        <Searchbar />

        <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
          <div className="flex-1 h-fit pb-40">
            <Routes>
              <Route path="/" element={<Discover />} />
              <Route path="/top-artists" element={<TopArtists />} />
              <Route path="/top-charts" element={<TopCharts />} />
              <Route path="/around-you" element={<AroundYou />} />
            </Routes>
          </div>


          <div className="xl:sticky relative top-0 h-fit">
            <TopPlay />
          </div>

        </div>

      </div>

      

      {activeSong?.title && (
        <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10">
          <MusicPlayer />
        </div>
      )}


    </div>
  )
}