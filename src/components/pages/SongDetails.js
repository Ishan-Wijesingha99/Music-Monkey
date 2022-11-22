
import { useParams } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import { DetailsHeader } from "../smallerComponents/DetailsHeader";
import { Error } from "../smallerComponents/Error";
import { LoaderAnimation } from "../smallerComponents/LoaderAnimation";
import { RelatedSongs } from "../smallerComponents/RelatedSongs";

import { setActiveSong, playPause } from "../../redux/features/playerSlice";

import { useGetSongDetailsQuery, useGetSongRelatedQuery } from "../../redux/services/shazamCore";



export const SongDetails = () => {
  const dispatch = useDispatch()

  const { songid } = useParams()

  const { activeSong, isPlaying } = useSelector(state => state.player)

  const { data: songData, isFetching: isFetchingSongDetails } = useGetSongDetailsQuery({ songid })
  const { data, isFetching: isFetchingRelatedSongs, error } = useGetSongRelatedQuery({ songid })



  const handlePauseClick = () => {
    dispatch(playPause(false))
  }

  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data, i }))
    dispatch(playPause(true))
  }



  if(isFetchingSongDetails || isFetchingRelatedSongs) return <LoaderAnimation title="Searching for song details..."/>
  
  if(error) return <Error />



  return (
    <div className="flex flex-col mt-16">

      <DetailsHeader
        artistId=""
        songData={songData}
      />

      <div className="mt-16">
        <h2 className="text-white text-4xl font-signature tracking-widest">Lyrics:</h2>

        <div className="mt-6">
          {
            songData?.sections[1].type === 'LYRICS'

            ?

            songData?.sections[1].text.map((line, i) => (
              <p
              key={i}
              className="text-gray-400 text-base my-1"
              >
                {line}
              </p>
            ))

            :

            <p className="text-gray-400 text-base my-1">Sorry, no lyrics found!</p>
          }
        </div>
      </div>

      <RelatedSongs 
        data={data}
        isPlaying={isPlaying}
        activeSong={activeSong}
        handlePauseClick={handlePauseClick}
        handlePlayClick={handlePlayClick}
      />

    </div>
  )
}