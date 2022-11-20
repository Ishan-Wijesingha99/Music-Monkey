
import React from "react";

import { useDispatch } from 'react-redux';

import PlayPause from './PlayPause'

import { playPause, setActiveSong } from "../../redux/features/playerSlice";



export const SongCard = ({ song, isPlaying, activeSong, i, data }) => {

  const dispatch = useDispatch()

  const handlePauseClick = () => {
    dispatch(playPause(false))
  }

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }))
    dispatch(playPause(true))
  }



  return (
    <div className="relative group m-4 bg-[#a56d6d] p-1 rounded-lg cursor-pointer hover:scale-105 duration-200">

      <div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex rounded-lg ${activeSong?.title === song.title ? 'flex bg-black bg-opacity-70' : 'hidden'}`}>

        <PlayPause
        isPlaying={isPlaying}
        activeSong={activeSong}
        song={song}
        handlePause={handlePauseClick}
        handlePlay={handlePlayClick}
        />

      </div>

      <img
      src={song.images?.coverart}
      alt=""
      className="w-[200px] duration-200 rounded-lg"
      />

    </div>
  )
}