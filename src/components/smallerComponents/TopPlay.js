import React from "react";
import { useGetTopChartsQuery } from "../../redux/services/shazamCore";
import { Link } from "react-router-dom";




const TopChartCard = ({ song, i }) => {
  return (
    <div className="w-full flex flex-row items-center hover:bg-gradient-to-r hover:from-[#292828] py-2 p-4 rounded-lg cursor-pointer justify-center items-center">
      <h3 className="font-bold text-base text-white mr-3">{i + 1}</h3>

      <div className="flex-1 flex flew-row justify-between items-center">
        <img
        className="w-[60px] h-[60px] rounded-lg"
        src={song?.images?.coverart}
        alt={song?.title}
        />

        <div className="flex-1 flex flex-col justify-center mx-3">
          <Link to={`/songs/${song.key}`}>
            <p className="text-md font-bold text-white">
              {/* {song?.title} */}
              { song?.title.length > 24 ? song?.title.slice(0, 24).concat('...') : song?.title }
            </p>
          </Link>

          <Link to={`/artists/${song?.artists[0].adamid}`}>
            <p className="text-base text-gray-300 mt-1">
              {/* {song?.subtitle} */}
              { song?.subtitle.length > 24 ? song?.subtitle.slice(0, 24).concat('...') : song?.subtitle }
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}







export const TopPlay = () => {

  const { data } = useGetTopChartsQuery()

  console.log(data)

  const topFivePlays = data?.slice(0, 5)
 

  return (
    <div className="w-[400px] pl-4 pt-8 pb-4 m-4 self-start bg-gradient-to-r from-[#a56d6d] rounded-lg">

      <h2 className='text-3xl text-white text-center w-[300px] font-signature tracking-widest'>TOP PLAY SECTION</h2>

      <div className="mt-4 flex flex-col gap-1">

        {topFivePlays?.map((song, i) => {
          return (
            <TopChartCard
            song={song}
            i={i}
            />
          )
        })}

      </div>



    </div>
  )
}