
import React from "react";

import loader from  '../../assets/loader.svg'



export const LoaderAnimation = ({ title }) => {
  return (
    <div className='w-full flex justify-center items-center flex-col mt-8'>
    
      <img src={loader} alt="loader" className='w-32 h-32 object-contain' />

      <h1 className='font-signature text-4xl text-white mt-2'>{title || 'Loading...'}</h1>

    </div>
  )
}