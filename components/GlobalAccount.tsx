import React from 'react'
import { GlobeDemo } from './aceternity/GridGlobe';

const GlobalAccount = () => {
  return (
    <div className='h-auto w-full md:h-[792px] bg-[#1D2D3C] flex flex-col justify-center items-center'>
        <div className='mt-10 flex flex-col justify-center items-center'>
        <p className='font-manrope font-bold text-[32px] md:text-[48px] bg-gradient-to-r from-[#FEFEFE] to-[#554d4d] text-transparent bg-clip-text'>
        A Global Account
        </p>
        <p className='font-manrope text-[12px] md:text-[18px]'>We are launching in the UK and EU to begin with expansion plans </p>
        <p className='font-manrope text-[12px] md:text-[18px]'>internationally.</p>
        </div>
        <span className='mb-20'><GlobeDemo/></span>
    </div>
  )
}

export default GlobalAccount;