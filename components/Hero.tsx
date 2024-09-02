import Image from 'next/image'
import React from 'react'
import { Cover } from './aceternity/Cover'

const Hero = () => {
  return (
    <div className='mt-[88px] flex flex-col items-center'>
      <p className='text-[18px] text-[#8B959E] opacity-60 font-manrope'>
        INTRODUCING
      </p>
      <p className='font-clash-grotesk font-semibold text-[96px] text-[#000000]'>
      World’s First
      </p>
      {/* <p className='font-clash-grotesk font-semibold bg-gradient-to-r from-[#00DECA] to-[#1A6AF4] text-transparent bg-clip-text text-[64px]'> */}
      <Cover> <span className='font-clash-grotesk font-semibold bg-gradient-to-r from-[#00DECA] to-[#1A6AF4] text-transparent bg-clip-text text-[64px]'><span className='text-white'>DeFi Powered</span> Regulated Accounts</span></Cover> 
      {/* </p> */}
      <span className='flex flex-col items-center'>
        <p className='font-manrope text-[18px] text-[#0D152E]'>
        Scallop is an innovative banking ecosystem for users that want a faster, more efficient way to
        </p>
        <p className='font-manrope text-[18px] text-[#0D152E]'>
          securely manage their crypto + fiat in a single place.
        </p>        
     </span>
        <Image src='/Group 33861.svg' alt='/' width={1705.14} height={439.86} className='-mt-10'/>
      <span className='flex justify-between items-center'>
        <p className='text-[16px] text-[#4F4F4F] opacity-60 font-manrope mr-2'>Coming soon for 747M users in :</p>
        <Image src='/Group 1648.svg' alt='/' width={100} height={24}/>
      </span>
    </div>
  )
}

export default Hero