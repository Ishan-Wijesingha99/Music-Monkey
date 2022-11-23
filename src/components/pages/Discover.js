import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { useGetSongsByGenreQuery } from "../../redux/services/shazamCore";

import { SongCard } from "../smallerComponents/SongCard";
import { Error } from '../smallerComponents/Error'
import { LoaderAnimation } from  '../smallerComponents/LoaderAnimation'

import { selectGenreListId } from "../../redux/features/playerSlice";



const genres = [
  { title: 'Pop', value: 'POP' },
  { title: 'Hip-Hop', value: 'HIP_HOP_RAP' },
  { title: 'Dance', value: 'DANCE' },
  { title: 'Electronic', value: 'ELECTRONIC' },
  { title: 'Rock', value: 'ROCK' },
  { title: 'Worldwide', value: 'WORLDWIDE' },
  { title: 'Soul', value: 'SOUL_RNB' },
  { title: 'Alternative', value: 'ALTERNATIVE' },
  { title: 'Latin', value: 'LATIN' },
  { title: 'Film', value: 'FILM_TV' },
  { title: 'Country', value: 'COUNTRY' },
  { title: 'Reggae', value: 'REGGAE_DANCE_HALL' },
  { title: 'House', value: 'HOUSE' },
  { title: 'K-Pop', value: 'K_POP' },
];



export const Discover = () => {

  const dispatch = useDispatch()
  const { activeSong, isPlaying, genreListId } = useSelector((state) => state.player)

  const { data, isFetching, error } = useGetSongsByGenreQuery(genreListId || 'POP')



  if(isFetching) return <LoaderAnimation title="Loading songs..." />

  if(error) return <Error />


  const genreTitle = genres.find(({ value }) => value === genreListId)?.title



  return (
    <div className="flex flex-col mt-16">



      <div className='flex justify-between items-center sm:flex-row flex-col'>

        <h2 className='font-signature tracking-widest text-4xl text-white text-left'>Discover {genreTitle}</h2>

        <select
          onChange={e => dispatch(selectGenreListId(e.target.value))} 
          value={genreListId || 'pop'}
          className='bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 border-2 border-[#a56d6d]'
        >

          {genres.map(object => {

            return (
              <option
              key={object.value}
              value={object.value}
              >
                {object.title}
              </option>
            )

          })}

        </select>

      </div>



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