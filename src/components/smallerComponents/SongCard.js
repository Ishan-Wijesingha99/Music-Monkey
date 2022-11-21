
import React from "react";

import { useDispatch } from 'react-redux';

import PlayPause from './PlayPause'

import { playPause, setActiveSong } from "../../redux/features/playerSlice";

import { Link } from "react-router-dom";



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
      className="w-[180px] duration-200 rounded-lg"
      />



      <div className='mt-4 flex flex-col'>

        <p className='font-semibold text-lg text-white truncate'>
          <Link to={`/songs/${song?.key}`}>
            { song.title.length > 16 ? song.title.slice(0, 16).concat('...') : song.title }
          </Link>
        </p>

        <p className='text-sm truncate text-gray-300 mt-1'>
          <Link to={song.artists ? `/artists/${song?.artists[0]?.adamid}` : '/top-artists'}>
          { song.subtitle.length > 24 ? song.subtitle.slice(0, 24).concat('...') : song.subtitle }
          </Link>
        </p>

      </div>

    </div>
  )
}