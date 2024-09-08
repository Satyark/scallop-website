import Image from 'next/image'
import React from 'react'

const FeaturedIn = () => {
  return (
    <div className='w-md md:w-[1216px] h-auto md:h-[344px] mt-20 md:mt-[88px] shadow-2xl flex flex-col items-center'>
        <span className='flex justify-center items-center my-10'>
          <div className='h-[1px] w-[54px] md:h-[1.5px] md:w-[154px] bg-gradient-to-r from-[#FFFFFF] to-[#1A6AF4]'></div>
            <p className='font-manrope font-bold text-[16px] md:text-[24px] bg-gradient-to-r from-[#1A6AF4] to-[#00DECA] text-transparent bg-clip-text mx-5'>Featured In</p>
            <div className='h-[1px] w-[54px] md:h-[1.5px] md:w-[154px] bg-gradient-to-r from-[#1A6AF4] to-[#FFFFFF]'></div>
        </span>
        <div className='flex flex-col justify-center items-center'>
        <div className='flex flex-col md:flex-row justify-center gap-6 items-center'>
            <Image src='/Forbes.svg' alt='/' width={126} height={70} className='flex justify-center hover:scale-[1.1] hover:transition duration-200'/>
            <Image src='/Bloom.svg' alt='/' width={162} height={30} className='mt-2'/>
            <Image src='/yahoo.svg' alt='/' width={107} height={46}/>
            <Image src='/cointel.svg' alt='/' width={198} height={45}/>
            <Image src='/coinmark.svg' alt='/' width={192} height={45}/>
        </div>
        <div className='flex flex-col md:flex-row justify-center gap-6 items-center mt-5'>
            <img src='/gulf.svg' alt='/' className='w-auto h-[26.5px]'/>
            <img src='/nas.svg' alt='/' className='w-auto h-[37px]'/>
            <img src='/insider.svg' alt='/' className='w-auto h-[32px]'/>
            <img src='/investing.svg' alt='/' className='w-auto h-[37px]'/>
        </div>
        </div>
        <div className='w-full flex justify-end text-[#1A6AF4] text-[16px] font-manrope mr-40 mt-3'>
          <p className='hover:cursor-pointer'>See All</p></div>
    </div>
  )
}

export default FeaturedIn