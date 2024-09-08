import Image from 'next/image'
import React from 'react'

const WhyScallop = () => {
  return (
    <div className='flex flex-col justify-center items-center h-[1021]'>
        <span className='flex justify-center items-center mt-20 md:mt-40 mb-5'>
          <div className='h-[1px] w-[54px] md:h-[1.5px] md:w-[154px] bg-gradient-to-r from-[#FFFFFF] to-[#1A6AF4]'></div>
            <p className='font-manrope font-bold text-[16px] md:text-[20px] bg-gradient-to-r from-[#1A6AF4] to-[#00DECA] text-transparent bg-clip-text mx-5'>Why Scallop?</p>
            <div className='h-[1px] w-[54px] md:h-[1.5px] md:w-[154px] bg-gradient-to-r from-[#1A6AF4] to-[#FFFFFF]'></div>
        </span>
        <p className='text-xl md:text-[48px] text-black font-manrope font-bold'>
        Banking, the way it should be.
        </p>
        <span className='flex flex-col items-center mt-3 md:mt-10'>
        <p className='font-manrope text-xs md:text-[18px] text-[#0D152E]'>
        Our mission is to bring digital assets into mainstream use and bridge the gap between decentralised and traditional finance.
        </p>
        <p className='font-manrope text-xs md:text-[18px] text-[#0D152E] mt-1 md:mt-5'>
        For the first time, store crypto & fiat in one place. Your crypto, your keys.
        </p>        
        </span>
        <Image src='/Whole Shell.svg' alt='' width={1000} height={800} className='mt-20'></Image>
    </div>
  )
}

export default WhyScallop