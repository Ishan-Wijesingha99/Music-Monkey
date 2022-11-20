import React from "react";
import { useGetTopChartsQuery } from "../../redux/services/shazamCore";
import { Link } from "react-router-dom";




const TopChartCard = ({ song, i }) => {
  return (
    <div className="w-full flex flex-row items-center hover:bg-[#4c426e] py-2 p-4 rounded-lg cursor-pointer mb-2 justify-center items-center">
      <h3 className="font-bold text-base text-white mr-3">{i + 1}</h3>

      <div className="flex-1 flex flew-row justify-between items-center">
        <img
        className="w-20 h-20 rounded-lg"
        src={song?.images?.coverart}
        alt={song?.title}
        />

        <div className="flex-1 flex flex-col justify-center mx-3">
          <Link to={`/songs/${song.key}`}>
            <p className="text-md font-bold text-white">{song?.title}</p>
          </Link>

          <Link to={`/artists/${song?.artists[0].adamid}`}>
            <p className="text-base text-gray-300 mt-1">{song?.subtitle}</p>
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
    <div className="w-[400px] m-4 self-start bg-gradient-to-t from-red-300 to-rose-400 rounded-lg">

      <h2 className='font-bold text-3xl text-white text-center w-[300px]'>Top Play Section</h2>

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