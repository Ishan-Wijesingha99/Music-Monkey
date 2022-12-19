
import React from "react";

import { useParams } from "react-router-dom";

import { useSelector } from "react-redux";

import { useGetArtistDetailsQuery } from "../../redux/services/shazamCore";

import { LoaderAnimation } from "../smallerComponents/LoaderAnimation";
import { Error } from "../smallerComponents/Error";
import { DetailsHeader } from "../smallerComponents/DetailsHeader";
import { RelatedSongs } from '../smallerComponents/RelatedSongs'



export const ArtistDetails = () => {
  let artistDataWithNoBugs = []

  const { id: artistId } = useParams()

  const { activeSong, isPlaying } = useSelector(state => state.player)

  const { data: artistData, isFetching, error } = useGetArtistDetailsQuery(artistId)

  if(artistData) {
    const arrayOfRelatedSongs = artistData?.data[0]?.views['top-songs']?.data

    arrayOfRelatedSongs.forEach(song => {
      if(song?.attributes?.artwork?.url && song?.attributes?.name && song?.attributes?.albumName) {
        artistDataWithNoBugs.push(song)
      }
    })
  }

  

  if(isFetching) return <LoaderAnimation title="Loading artist details..."/>
  
  if(error) return <Error />



  return (
    <div className="flex flex-col mt-16">

      <DetailsHeader
        artistId={artistId}
        artistData={artistData}
      />

      <RelatedSongs 
        data={artistDataWithNoBugs}
        artistId={artistId}
        isPlaying={isPlaying}
        activeSong={activeSong}
      />

    </div>
  )
}