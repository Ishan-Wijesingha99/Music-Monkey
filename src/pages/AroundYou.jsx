import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { Error, Loader, SongCard } from '../components'
import { useGetSongsByCountryQuery } from "../redux/services/shazamCore";



const AroundYou = () => {
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
  
  

  if(isFetching && loading) return <Loader title="Loading songs in your country..."/>

  if(error && country) return <Error />



  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">Around You</h2>
    </div>
  )
}

export default AroundYou;
