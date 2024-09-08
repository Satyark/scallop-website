"use client";
import Image from 'next/image'
import React from 'react'
import { BackgroundBeams } from './aceternity/BackgroundBeams'
import { BackgroundBeamsWithCollision } from './aceternity/BackgroundBeams2';

const ScallopCoin = () => {
  return (
    
    <div className='flex flex-col md:flex-row justify-center items-center mx-3 w-auto h-auto md:w-[1216px] md:h-[600px] rounded-[16px] bg-[#1D2D3C] gap-20'>
        <BackgroundBeamsWithCollision className='rounded-[16px] bg-[#1D2D3C]'>
            <div className='p-10'><Image src='/SCLP.svg' alt='/' width={233} height={475}/></div>
            <div className='h-auto justify-center items-center mt-10'>
                <p className='font-manrope font-semibold text-[10px] md:text-[20px]'>Introducing</p>
                <p className='font-manrope font-semibold text-[20px] md:text-[48px] bg-gradient-to-r from-[#FEFEFE] to-[#4a4545] text-transparent bg-clip-text'>
                    Scallop Coin
                </p>
                <p className='font-manrope text-[12px] md:text-[18px]'>Scallop Coin (SCLP) is a native ERC20 token of the Scallop </p>
                <p className='font-manrope text-[12px] md:text-[18px]'>platform that  empowers the Scallop Ecosystem.</p> 
                <p className='font-manrope text-[12px] md:text-[18px]'>SCLP has multiple uses:</p>
                <span className='flex justify-start items-center gap-5 my-2 md:my-5'>
                    <Image src='/CircleTick.svg' alt='/' width={32} height={32} className='w-5 h-5 md:w-[32px] md:h-[32px]'/>
                    <p className='font-manrope text-[8px] md:text-[16px]'>
                        For receiving trading bonus payments and much more
                    </p>
                </span>
                <span className='flex justify-start items-center gap-5 my-2 md:my-5'>
                    <Image src='/CircleTick.svg' alt='/' width={32} height={32} className='w-5 h-5 md:w-[32px] md:h-[32px]'/>
                    <p className='font-manrope text-[8px] md:text-[16px]'>
                    Stake SCLP to open accounts and access services
                    </p>
                </span>
                <span className='flex justify-start items-center gap-5 my-2 md:my-5'>
                    <Image src='/CircleTick.svg' alt='/' width={32} height={32} className='w-5 h-5 md:w-[32px] md:h-[32px]'/>
                    <p className='font-manrope text-[8px] md:text-[16px]'>
                    Payment of transaction fees
                    </p>
                </span>
                <span className='flex justify-start items-center gap-5 my-2 md:my-5'>
                    <Image src='/CircleTick.svg' alt='/' width={32} height={32} className='w-5 h-5 md:w-[32px] md:h-[32px]'/>
                    <p className='font-manrope text-[8px] md:text-[16px]'>
                    Transaction fees, exchange fees and monthly management fees
                    </p>
                </span>
                <button type='submit' className='w-[66px] h-[20px] md:w-[166px] md:h-[48px] border border-wh rounded-full text-[8px] md:text-[16px] font-manrope'>Tokenomics</button>
            </div>
            <BackgroundBeams />
            </BackgroundBeamsWithCollision>
    </div>

  )
}

export default ScallopCoin