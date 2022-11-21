import React from "react";

import { useState, useEffect } from "react";

import { useSelector } from "react-redux";

import { useGetSongsByCountryQuery } from "../../redux/services/shazamCore";

import { Error } from "../smallerComponents/Error";
import { LoaderAnimation } from "../smallerComponents/LoaderAnimation";
import { SongCard } from "../smallerComponents/SongCard";



export const AroundYou = () => {
  const [country, setCountry] = useState('')
  const [loading, setLoading] = useState(true)

  const { activeSong, isPlaying } = useSelector(state => state.player)

  const { data, isFetching, error } = useGetSongsByCountryQuery(country)



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
    <div className="flex flex-col m-8">

      <h2 className='font-signature tracking-widest text-3xl text-white text-left'>
        Around You - {country}
      </h2>

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