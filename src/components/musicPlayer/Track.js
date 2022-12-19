import React from 'react';

const Track = ({ isPlaying, isActive, activeSong }) => (
  <div className="flex-1 flex items-center justify-start">
    <div className={`${isPlaying && isActive ? 'animate-[spin_3s_linear_infinite]' : ''} hidden sm:block h-16 w-16 mr-4`}>
      <img src={activeSong?.images?.coverart} alt="cover art" className="rounded-full" />
    </div>
    <div className="w-[50%]">
      <p className="truncate text-white font-bold text-lg">
        {/* {activeSong?.title ? activeSong?.title : 'No active Song'} */}
        { activeSong?.title.length > 22 ? activeSong?.title.slice(0, 22).concat('...') : activeSong?.title }
      </p>
      <p className="truncate text-gray-300">
        {/* {activeSong?.subtitle ? activeSong?.subtitle : 'No active Song'} */}
        { activeSong?.subtitle.length > 22 ? activeSong?.subtitle.slice(0, 22).concat('...') : activeSong?.subtitle }
      </p>
    </div>
  </div>
);

export default Track;