import React from 'react';
import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa'



const PlayPause = ({ isPlaying, activeSong, song, handlePause, handlePlay }) => {

  return (
    <div>

      {

        isPlaying && (activeSong?.key === song.key) 

        ? 

        <FaPauseCircle
        size={35}
        className="text-gray-300"
        onClick={handlePause}
        />

        :

        <FaPlayCircle
        size={35}
        className="text-gray-300"
        onClick={handlePlay}
        />
        
      }

    </div>
  )

}

export default PlayPause;
