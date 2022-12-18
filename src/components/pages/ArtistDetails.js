
import React from "react";

import { useParams } from "react-router-dom";

import { useSelector } from "react-redux";

import { useGetArtistDetailsQuery } from "../../redux/services/shazamCore";

import { LoaderAnimation } from "../smallerComponents/LoaderAnimation";
import { Error } from "../smallerComponents/Error";
import { DetailsHeader } from "../smallerComponents/DetailsHeader";
import { RelatedSongs } from '../smallerComponents/RelatedSongs'



export const ArtistDetails = () => {
  const { id: artistId } = useParams()

  const { activeSong, isPlaying } = useSelector(state => state.player)

  const { data: artistData, isFetching, error } = useGetArtistDetailsQuery(artistId)

  console.log(artistData)



  console.log(artistData?.data[0]?.views['top-songs']?.data)



  if(isFetching) return <LoaderAnimation title="Loading artist details..."/>
  
  if(error) return <Error />



  return (
    <div className="flex flex-col mt-16">

      <DetailsHeader
        artistId={artistId}
        artistData={artistData}
      />

      <RelatedSongs 
        // data={Object.values(artistData?.songs)}
        data={artistData?.data[0]?.views['top-songs']?.data}
        artistId={artistId}
        isPlaying={isPlaying}
        activeSong={activeSong}
      />

    </div>
  )
}