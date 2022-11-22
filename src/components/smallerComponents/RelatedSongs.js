import Songbar from './SongBar'



export const RelatedSongs = ({ data, isPlaying, activeSong, handlePauseClick, handlePlayClick, artistId }) => {

  return (
    <div className='flex flex-col mt-16'>

      <h1 className='font-signature tracking-widest text-4xl text-white'>Related Songs:</h1>

      <div className='mt-6 w-full flex flex-col'>

        {data?.map((song, i) => (
          <Songbar
          key={`${song.key}-${artistId}`}
          song={song}
          i={i}
          artistId={artistId}
          isPlaying={isPlaying}
          activeSong={activeSong}
          handlePauseClick={handlePauseClick}
          handlePlayClick={handlePlayClick}
          />
        ))}

      </div>
    </div>
  )
}

