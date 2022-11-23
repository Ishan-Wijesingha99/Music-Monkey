import React from "react";
import { useEffect } from "react";

import { Discover } from "./pages/Discover";
import { Sidebar } from "./smallerComponents/Sidebar";

import { Route, Routes } from 'react-router-dom';
import { TopArtists } from "./pages/TopArtists";
import { TopCharts } from "./pages/TopCharts";
import { AroundYou } from "./pages/AroundYou";
import { TopPlay } from "./smallerComponents/TopPlay";
import { ArtistDetails } from "./pages/ArtistDetails";
import { SongDetails } from "./pages/SongDetails";
import { Search } from "./pages/Search";


import { useSelector } from "react-redux";

import MusicPlayer from "./musicPlayer";
import { Searchbar } from "../components/smallerComponents/SearchBar"





export const App = () => {

  const { activeSong } = useSelector(state => state.player)

  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)



  useEffect(() => {
    const windowResizeFunction = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', windowResizeFunction)

    return () => {
      window.removeEventListener('resize', windowResizeFunction)
    }

  }, [])



  return (
    <div>
      
      {

        windowWidth > 800 
    
      ? 

        (
          <div className="relative flex">

            <Sidebar />
    
    
    
            <div className="flex-1 flex flex-col">
    
              <Searchbar />
    
              <div className="px-2 h-[calc(100vh-72px)] overflow-y-scroll scrollbar-hide flex xl:flex-row flex-col-reverse">
    
                <div className="flex-1 h-fit pb-40">
                  <Routes>
                    <Route path="/" element={<Discover />} />
                    <Route path="/top-artists" element={<TopArtists />} />
                    <Route path="/top-charts" element={<TopCharts />} />
                    <Route path="/around-you" element={<AroundYou />} />
                    <Route path="/artists/:id" element={<ArtistDetails />} />
                    <Route path="/songs/:songid" element={<SongDetails />} />
                    <Route path="/search/:searchTerm" element={<Search />} />
                  </Routes>
                </div>
    
                <div className="xl:sticky relative top-0 h-fit">
                  <TopPlay />
                </div>
      
              </div>
    
            </div>
    
          
    
            {activeSong?.title && (
              <div className="absolute h-28 bottom-0 left-0 right-0 flex bg-[#a56d6d]">
                <MusicPlayer />
              </div>
            )}
    
          </div>
        )
        
      :

        (
          <div className="flex flex-col items-center justify-center relative">

            <div className="flex flex-col justify-center items-center">
              <Sidebar />
            </div>

            <div className="flex flex-col justify-center items-center">
              <TopPlay />
            </div>
            
            <div className="flex flex-col justify-center items-center">
              <Searchbar />
            </div>

            <div className="mx-4 mb-48">
              <Routes>
                <Route path="/" element={<Discover />} />
                <Route path="/top-artists" element={<TopArtists />} />
                <Route path="/top-charts" element={<TopCharts />} />
                <Route path="/around-you" element={<AroundYou />} />
                <Route path="/artists/:id" element={<ArtistDetails />} />
                <Route path="/songs/:songid" element={<SongDetails />} />
                <Route path="/search/:searchTerm" element={<Search />} />
              </Routes>
            </div>
            
            

            {activeSong?.title && (
              <div className="fixed h-28 bottom-0 left-0 right-0 flex bg-[#a56d6d]">
                <MusicPlayer />
              </div>
            )}

          </div>
        )
    
      }

    </div>
   
  )
}