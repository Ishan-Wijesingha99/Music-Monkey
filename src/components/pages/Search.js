
import React from "react";

import { useSelector } from 'react-redux'
import { useParams } from "react-router-dom";

import { Error } from "../smallerComponents/Error";
import { LoaderAnimation } from "../smallerComponents/LoaderAnimation";
import { SongCard } from "../smallerComponents/SongCard";

import { useGetSongsBySearchQuery } from "../../redux/services/shazamCore";



export const Search = () => {
  const { searchTerm } = useParams()

  const { activeSong, isPlaying } = useSelector(state => state.player)

  const { data, isFetching, error } = useGetSongsBySearchQuery(searchTerm)

  const songs = data?.tracks?.hits.map(song => song.track)



  if(isFetching) return <LoaderAnimation title={`Searching ${searchTerm}...`}/>

  if(error) return <Error />



  return (
    <div className="flex flex-col mt-16">
      
      <h2 className="font-signature tracking-widest text-4xl text-white text-left">
        {searchTerm}
      </h2>

      <div className='flex flex-wrap sm:justify-start justify-center items-center text-center mt-16'>

        {songs?.map((song, i) => (
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