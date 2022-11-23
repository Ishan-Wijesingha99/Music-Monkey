
import { Link } from "react-router-dom";



export const DetailsHeader = ({ artistId, artistData, songData }) => {

  const artistExtractedData = artistData?.artists[artistId]?.attributes



  return (
    <div className='relative w-full flex flex-col'>

      <div className='flex items-center bg-gradient-to-r from-[#a56d6d] rounded-lg py-4'>

        <img
        alt="art"
        src={artistId ? artistExtractedData.artwork?.url.replace('{w}', '500').replace('{h}', '500') : songData?.images?.coverart }
        className="sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover ml-4 border-2 border-white shadow-xl shadow-[#292828]"/>

        <div className='ml-6'>

          <p
          className='font-signature tracking-widest sm:font-3xl text-xl text-white'
          >
            {artistId ? artistExtractedData?.name : songData?.title}
          </p>

          {!artistId && (
            <Link to={`/artists/${songData?.artists[0].adamid}`}>
              <p className='text-base text-gray-400 mt-2 hover:underline'>{songData?.subtitle}</p>
            </Link>
          )}

          <p className='text-base text-gray-400 mt-2'>
            {artistId 
              ?
              artistExtractedData?.genreNames[0]
              :
              songData?.genres?.primary
            }
          </p>

        </div>

      </div>

      

    </div>
  )
}