import React from "react";
import { useGetSongsByGenreQuery } from "../../redux/services/shazamCore";
import { SongCard } from "../smallerComponents/SongCard";



export const Discover = () => {

  const { data, isFetching, error } = useGetSongsByGenreQuery('POP')

  console.log(data)

  return (
    <div className="flex flex-col m-8">

    <h2 className='font-bold text-3xl text-white text-left'>Discover</h2>

      <div className='flex flex-wrap sm:justify-start justify-center items-center text-center'>

        {data?.map((song, i) => (
          <SongCard
          key={song.key}
          song={song}
          i={i}
          />
        ))} 

      </div>

    </div>
  )
}