import React from "react";
import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import PlayPause from "./PlayPause";

import { playPause, setActiveSong } from "../../redux/features/playerSlice";

import { useGetTopChartsQuery } from "../../redux/services/shazamCore";

import { Link } from "react-router-dom";





const TopChartCard = ({ song, i, isPlaying, activeSong, handlePauseClick, handlePlayClick }) => {
  return (
    <div className="w-full flex flex-row items-center hover:bg-gradient-to-r hover:from-[#292828] py-2 p-4 rounded-lg cursor-pointer justify-center items-center">
      <h3 className="font-bold text-base text-white mr-3">{i + 1}</h3>

      <div className="flex-1 flex flew-row justify-between items-center">
        <img
        className="w-[60px] h-[60px] rounded-lg"
        src={song?.images?.coverart}
        alt={song?.title}
        />

        <div className="flex-1 flex flex-col justify-center mx-3">
          <Link to={`/songs/${song.key}`}>
            <p className="text-md font-bold text-white hover:underline">
              {/* {song?.title} */}
              { song?.title.length > 22 ? song?.title.slice(0, 22).concat('...') : song?.title }
            </p>
          </Link>

          <Link to={`/artists/${song?.artists[0].adamid}`}>
            <p className="text-base text-gray-300 mt-1 hover:underline">
              {/* {song?.subtitle} */}
              { song?.subtitle.length > 22 ? song?.subtitle.slice(0, 22).concat('...') : song?.subtitle }
            </p>
          </Link>
        </div>
      </div>

      <PlayPause
        isPlaying={isPlaying}
        activeSong={activeSong}
        song={song}
        handlePause={handlePauseClick}
        handlePlay={handlePlayClick}
      />

    </div>
  )
}







export const TopPlay = () => {

  const { data } = useGetTopChartsQuery()

  const dispatch = useDispatch()

  const { activeSong, isPlaying } = useSelector(state => state.player)

  const topFivePlays = data?.slice(0, 5)
 


  const handlePauseClick = () => {
    dispatch(playPause(false))
  }

  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data, i }))
    dispatch(playPause(true))
  }



  return (
    <div
    className="w-[380px] pl-4 pt-6 pb-4 m-4 self-start bg-gradient-to-r from-[#a56d6d] rounded-lg"
    >

      <h2 className='text-3xl text-white text-center w-[300px] font-signature tracking-widest'>TOP PLAY SECTION</h2>

      <div className="mt-4 flex flex-col gap-1">

        {topFivePlays?.map((song, i) => {
          return (
            <TopChartCard
              key={song.key}
              song={song}
              i={i}
              isPlaying={isPlaying}
              activeSong={activeSong}
              handlePauseClick={handlePauseClick}
              handlePlayClick={() => handlePlayClick(song, i)}
            />
          )
        })}

      </div>

      <Link
      to="/top-charts"
      >
        <p className="text-white text-lg font-signature tracking-widest cursor-pointer mt-4 hover:bg-gradient-to-r hover:from-[#292828] pl-4 rounded-lg">See more...</p>
      </Link>

    </div>
  )
}