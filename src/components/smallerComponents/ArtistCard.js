
import { useNavigate } from "react-router-dom";



export const ArtistCard = ({ track }) => {
  const navigate = useNavigate()

  return (
    <div
    className="flex flex-col w-[184px] rounded-lg cursor-pointer m-4 hover:scale-105 duration-200 mb-8"
    onClick={() => navigate(`/artists/${track?.artists[0].adamid}`)}
    >

      <img
      src={track?.images?.coverart}
      alt="artist"
      className="h-[176px] w-[176px] duration-200 rounded-lg p-1 bg-[#a56d6d]"
      />

      <p className="mt-4 mb-1 font-semibold text-lg text-white truncate hover:underline">
        { track?.subtitle.length > 24 ? track?.subtitle.slice(0, 24).concat('...') : track?.subtitle }
      </p>

    </div>
  )
}