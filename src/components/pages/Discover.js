import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { useGetSongsByGenreQuery } from "../../redux/services/shazamCore";

import { SongCard } from "../smallerComponents/SongCard";

import { Error } from '../smallerComponents/Error'
import { LoaderAnimation } from  '../smallerComponents/LoaderAnimation'



export const Discover = () => {

  const dispatch = useDispatch()
  const { activeSong, isPlaying, genreListId } = useSelector((state) => state.player)

  const { data, isFetching, error } = useGetSongsByGenreQuery('ROCK')



  if(isFetching) return <LoaderAnimation title="Loading songs..." />

  if(error) return <Error />


  return (
    <div className="flex flex-col m-8">

    <h2 className='font-signature tracking-widest text-3xl text-white text-left'>Discover</h2>

      <div className='flex flex-wrap sm:justify-start justify-center items-center text-center'>

        {data?.map((song, i) => (
          <SongCard
          key={song.key}
          song={song}
          i={i}
          isPlaying={isPlaying}
          activeSong={activeSong}
          data={data}
          />
        ))} 

      </div>

    </div>
  )
}