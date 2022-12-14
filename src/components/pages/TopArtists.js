import React from "react";

import { ArtistCard } from "../smallerComponents/ArtistCard";
import { Error } from '../smallerComponents/Error'
import { LoaderAnimation } from '../smallerComponents/LoaderAnimation'

import { useGetTopChartsQuery } from '../../redux/services/shazamCore'



export const TopArtists = () => {

  let dataWithNoBugs = []

  const { data, isFetching, error } = useGetTopChartsQuery()

  if(data) {
    data.forEach(track => {
      if(track?.key && track?.artists && track?.images?.coverart && track?.subtitle) {
        dataWithNoBugs.push(track)
      }
    })
  }



  if(isFetching) return <LoaderAnimation title="Loading top artists" />

  if(error) return <Error />



  return (
    <div className="flex flex-col mt-16">

    <h2 className='font-signature tracking-widest text-4xl text-white text-left'>Top Artists</h2>

      <div className="flex flex-wrap sm:justify-start justify-center items-center text-center mt-16">

        {dataWithNoBugs?.map(track => (

          <ArtistCard 
          key={track.key}
          track={track}
          />

        ))}

      </div>

    </div>
  )
}