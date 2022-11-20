
import React from "react";



export const SongCard = ({ song }) => {
  return (
    <div className="m-4 bg-[#4c426e] p-2 rounded-lg cursor-pointer hover:scale-105 duration-200">
      <img
      src={song.images?.coverart}
      alt=""
      className="w-[250px] hover:opacity-60 duration-200 rounded-lg"
      />
    </div>
  )
}