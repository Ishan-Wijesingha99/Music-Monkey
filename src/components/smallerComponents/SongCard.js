
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
    <div className='flex flex-col w-[180px] h-[180px] p-1 m-4 rounded-lg cursor-pointer bg-[#a56d6d] hover:scale-105 duration-200 mb-24'>

      <div className='relative w-full h-56 group'>

        <div
        className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex
        ${activeSong?.key === song.key ? 'flex bg-black bg-opacity-70' : 'hidden'}`}
        >

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
        alt="song_img"
        className="rounded-lg"
        />

      </div>

      <div className='mt-4 flex flex-col'>

        <p className='font-semibold text-lg text-white truncate hover:underline'>
          <Link to={`/songs/${song?.key}`}>
            {song.title}
          </Link>
        </p>

        <p className='text-sm truncate text-gray-300 mt-1 hover:underline'>
          <Link to={song.artists ? `/artists/${song?.artists[0]?.adamid}` : '/top-artists'}>
            {song.subtitle}
          </Link>
        </p>

      </div>

    </div>
  )  
  
}