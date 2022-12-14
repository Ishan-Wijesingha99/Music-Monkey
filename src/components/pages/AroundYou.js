import React from "react";

import { useState, useEffect } from "react";

import { useSelector } from "react-redux";

import { useGetSongsByCountryQuery } from "../../redux/services/shazamCore";

import { Error } from "../smallerComponents/Error";
import { LoaderAnimation } from "../smallerComponents/LoaderAnimation";
import { SongCard } from "../smallerComponents/SongCard";



export const AroundYou = () => {

  let dataWithNoBugs = []

  const [country, setCountry] = useState('')
  const [loading, setLoading] = useState(true)

  const { activeSong, isPlaying } = useSelector(state => state.player)

  const { data, isFetching, error } = useGetSongsByCountryQuery(country)

  if(data) {
    data.forEach(song => {
      if(song?.key && song?.title && song.images?.coverart && song?.artists && song?.artists[0]?.adamid && song?.subtitle) {
        dataWithNoBugs.push(song)
      }
    })
  }



  useEffect(() => {

    fetch('https://ipinfo.io/json?token=93cd9a555aabe8')
    .then(res => res.json())
    .then(data => {
      setCountry(data.country)
    })
    .catch(err => console.log(err))
    .finally(() => setLoading(false))

  }, [country])



  if(isFetching && loading) return <LoaderAnimation title="Loading songs in your country..."/>

  if(error && country) return <Error />

  return (
    <div className="flex flex-col mt-16">

      <h2 className='font-signature tracking-widest text-4xl text-white text-left'>
        Around You - {country}
      </h2>

      <div className='flex flex-wrap sm:justify-start justify-center items-center text-center mt-16'>

        {dataWithNoBugs?.map((song, i) => (
          <SongCard
          key={song.key}
          song={song}
          i={i}
          isPlaying={isPlaying}
          activeSong={activeSong}
          data={dataWithNoBugs}
          />
        ))} 

      </div>

    </div>
  )
}