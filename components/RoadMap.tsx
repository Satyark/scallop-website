import Image from 'next/image'
import React from 'react'

const RoadMap = () => {
  return (
    <div className='flex flex-col justify-center items-center h-auto w-full md:h-[905px] mt-10 md:mt-0'>
        <span className='flex justify-center items-center '>
          <div className='h-[1px] w-[54px] md:h-[1.5px] md:w-[154px] bg-gradient-to-r from-[#FFFFFF] to-[#1A6AF4]'></div>
            <p className='font-manrope font-bold text-[20px] md:text-[32px] bg-gradient-to-r from-[#1A6AF4] to-[#00DECA] text-transparent bg-clip-text mx-5'>Road Map</p>
            <div className='h-[1px] w-[54px] md:h-[1.5px] md:w-[154px] bg-gradient-to-r from-[#1A6AF4] to-[#FFFFFF]'></div>
        </span>
        <p className='font-manrope text-[18px] text-[#4F4F4F] mt-3'>The path To global crypto adoption</p>

        {/* first grid */}
        <div className='flex flex-col md:flex-row justify-center items-end md:gap-20 md:mt-20'>
            <div className='flex justify-center items-center w-[200px] h-[71px] shadow-xl rounded-[15px] text-[16px] text-black'>
                <p className='font-manrope'>Scallop Concept</p>
            </div>

            <div className='flex flex-col justify-end items-center w-[200px] h-[150px] shadow-xl rounded-[15px] text-black font-manrope p-5'>
                <p className='text-[14px] text-[#4F4F4F]'>Legal and </p>
                <p className='text-[14px] text-[#4F4F4F]'>regulatory research</p>
                <p className='text-[16px] mt-5'>Jul 2020</p>
            </div>

            <div className='flex flex-col justify-end items-center w-[200px] h-[150px] shadow-xl rounded-[15px] text-black font-manrope p-5'>
                <p className='text-[14px] text-[#4F4F4F]'>Crypto license</p>
                <p className='text-[14px] text-[#4F4F4F]'>initiation</p>
                <p className='text-[16px] mt-5'>Jul 2020</p>
            </div>

            <div className='flex flex-col justify-end items-center w-[200px] h-[150px] shadow-xl rounded-[15px] text-black font-manrope p-5'>
                <p className='text-[14px] text-[#4F4F4F]'>EMD application</p>
                <p className='text-[14px] text-[#4F4F4F]'>inititaion</p>
                <p className='text-[16px] mt-5'>Jul 2020</p>
            </div>
        </div>

        {/* second grid */}

        <div className='flex flex-col md:flex-row justify-center items-end md:gap-20 md:mt-20'>
            <div className='flex flex-col justify-end items-center w-[200px] h-[150px] shadow-xl rounded-[15px] text-black font-manrope p-5'>
                <p className='text-[14px] text-[#4F4F4F]'>Cross chain</p>
                <p className='text-[14px] text-[#4F4F4F]'>swap</p>
                <p className='text-[16px] mt-5'>Sept 2021</p>
            </div>

            <div className='flex flex-col justify-end items-center w-[200px] h-[150px] shadow-xl rounded-[15px] text-black font-manrope p-5'>
                <p className='text-[14px] text-[#4F4F4F]'>Beta</p>
                <p className='text-[14px] text-[#4F4F4F]'>product testing</p>
                <p className='text-[16px] mt-5'>Aug 2021</p>
            </div>

            <div className='flex flex-col justify-end items-center w-[200px] h-[150px] shadow-xl rounded-[15px] text-black font-manrope p-5'>
                <p className='text-[14px] text-[#4F4F4F]'>MVP & Alpha</p>
                <p className='text-[14px] text-[#4F4F4F]'>product launch</p>
                <p className='text-[16px] mt-5'>Feb 2021</p>
            </div>

            <div className='flex flex-col justify-end items-center w-[200px] h-[150px] shadow-xl rounded-[15px] text-black font-manrope p-5'>
                <p className='text-[14px] text-[#4F4F4F]'>Technology</p>
                <p className='text-[14px] text-[#4F4F4F]'>R&D</p>
                <p className='text-[16px] mt-5'>Nov 2020</p>
            </div>
        </div>

        {/* third grid */}

        <div className='flex flex-col md:flex-row justify-center items-end md:gap-20 md:mt-20'>
            <div className='flex flex-col justify-end items-center w-[200px] h-[150px] shadow-xl rounded-[15px] text-black font-manrope p-5'>
                <p className='text-[14px] text-[#4F4F4F]'>Go-Live in UK & EU</p>
                <p className='text-[14px] text-[#4F4F4F]'>for 747m users</p>
                <p className='text-[16px] mt-5'>Oct 2021</p>
            </div>

            <div className='flex flex-col justify-end items-center w-[200px] h-[150px] shadow-xl rounded-[15px] text-black font-manrope p-5'>
                <p className='text-[14px] text-[#4F4F4F]'>Roll out</p>
                <p className='text-[14px] text-[#4F4F4F]'>Scallop Pay & NFT</p>
                <p className='text-[16px] mt-5'>Dec 2021</p>
            </div>

            <div className='flex flex-col justify-end items-center w-[200px] h-[150px] shadow-xl rounded-[15px] text-black font-manrope p-5'>
                <p className='text-[14px] text-[#4F4F4F]'>Scallop chain</p>
                <p className='text-[14px] text-[#4F4F4F]'>Launch</p>
                <p className='text-[16px] mt-5'>Q1 2022</p>
            </div>

            <div className='flex flex-col justify-end items-center w-[200px] h-[150px] shadow-xl rounded-[15px] text-black font-manrope p-5'>
                <p className='text-[14px] text-[#4F4F4F]'>Expansion &</p>
                <p className='text-[14px] text-[#4F4F4F]'>Growth</p>
                <p className='text-[16px] mt-5'>Q2 2022</p>
            </div>
        </div>
        <Image src='/Backdrop.svg' alt='/' width={300} height={167} className='hidden md:block absolute mt-[950px] -left-[100px]'/>
        <Image src='/Bg2.svg' alt='/' width={362} height={227} className='hidden md:block absolute mb-[640px] -right-[200px]'/>

        {/* <div className="absolute top-1/2 transform -translate-y-1/2 left-0 right-0 h-[2px] w-full bg-blue-500"></div> */}
    </div>
  )
}

export default RoadMap
