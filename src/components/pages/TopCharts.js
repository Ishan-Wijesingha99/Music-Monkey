import React from "react";

import { Error } from '../smallerComponents/Error'
import { LoaderAnimation } from "../smallerComponents/LoaderAnimation";
import { SongCard } from "../smallerComponents/SongCard";

import { useSelector } from "react-redux";

import { useGetTopChartsQuery } from "../../redux/services/shazamCore";


export const TopCharts = () => {

  const { activeSong, isPlaying } = useSelector(state => state.player)

  const { data, isFetching, error } = useGetTopChartsQuery()

  if(isFetching) return <LoaderAnimation title="Loading top charts..."/>

  if(error) return <Error />

  return (
    <div className="flex flex-col mt-16">

      <h2 className='font-signature tracking-widest text-4xl text-white text-left'>Top Charts</h2>

      <div className='flex flex-wrap sm:justify-start justify-center items-center text-center mt-16'>

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