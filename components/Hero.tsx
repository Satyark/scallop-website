import Image from 'next/image'
import React from 'react'
import { Cover } from './aceternity/Cover'

const Hero = () => {
  return (
    <div className='md:mt-[88px] flex flex-col items-center'>
      <p className='text-[18px] text-[#8B959E] opacity-60 font-manrope'>
        INTRODUCING
      </p>
      <p className='font-clash-grotesk font-semibold text-[55px] md:text-[96px] text-[#000000]'>
      World’s First
      </p>
      {/* <p className='font-clash-grotesk font-semibold bg-gradient-to-r from-[#00DECA] to-[#1A6AF4] text-transparent bg-clip-text text-[64px]'> */}
      <Cover> <span className='flex flex-col md:flex-row justify-center items-center font-clash-grotesk font-semibold bg-gradient-to-r from-[#00DECA] to-[#1A6AF4] text-transparent bg-clip-text text-[36px] md:text-[64px]'><span className='text-white'>DeFi Powered</span> Regulated Accounts</span></Cover> 
      {/* </p> */}
      <span className='flex flex-col items-center my-2'>
        <p className='font-manrope text-[12px] md:text-[18px] text-[#0D152E] px-6'>
        Scallop is an innovative banking ecosystem for users wanting a faster and efficient way to manage their funds in a single place.
        </p>
     </span>
        <Image src='/Group 33861.svg' alt='/' width={1705.14} height={439.86} className='hidden md:block -mt-10'/>
      <span className='flex justify-between items-center my-6'>
        <p className='text-[16px] text-[#4F4F4F] opacity-60 font-manrope mr-2'>Coming soon for 747M users in :</p>
        <Image src='/Group 1648.svg' alt='/' width={100} height={24}/>
      </span>
    </div>
  )
}

export default Hero