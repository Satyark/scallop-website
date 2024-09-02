"use client";
import Image from 'next/image'
import React from 'react'
import { BackgroundBeams } from './aceternity/BackgroundBeams'
import { BackgroundBeamsWithCollision } from './aceternity/BackgroundBeams2';

const ScallopCoin = () => {
  return (
    
    <div className='flex justify-center items-center w-[1216px] h-[600px] rounded-[16px] bg-[#1D2D3C] gap-20'>
        <BackgroundBeamsWithCollision className='rounded-[16px] bg-[#1D2D3C]'>
            <div className='p-10'><Image src='/SCLP.svg' alt='/' width={233} height={475}/></div>
            <div className='h-auto justify-center items-center mt-10'>
                <p className='font-manrope font-semibold text-[20px]'>Introducing</p>
                <p className='font-manrope font-semibold text-[48px] bg-gradient-to-r from-[#FEFEFE] to-[#4a4545] text-transparent bg-clip-text'>
                    Scallop Coin
                </p>
                <p className='font-manrope text-[18px]'>Scallop Coin (SCLP) is a native ERC20 token of the Scallop </p>
                <p className='font-manrope text-[18px]'>platform that  empowers the Scallop Ecosystem.</p> 
                <p className='font-manrope text-[18px]'>SCLP has multiple uses:</p>
                <span className='flex justify-start items-center gap-5 my-5'>
                    <Image src='/CircleTick.svg' alt='/' width={32} height={32}/>
                    <p className='font-manrope text-[16px]'>
                        For receiving trading bonus payments and much more
                    </p>
                </span>
                <span className='flex justify-start items-center gap-5 my-5'>
                    <Image src='/CircleTick.svg' alt='/' width={32} height={32}/>
                    <p className='font-manrope text-[16px]'>
                    Stake SCLP to open accounts and access services
                    </p>
                </span>
                <span className='flex justify-start items-center gap-5 my-5'>
                    <Image src='/CircleTick.svg' alt='/' width={32} height={32}/>
                    <p className='font-manrope text-[16px]'>
                    Payment of transaction fees
                    </p>
                </span>
                <span className='flex justify-start items-center gap-5 my-5'>
                    <Image src='/CircleTick.svg' alt='/' width={32} height={32}/>
                    <p className='font-manrope text-[16px]'>
                    Transaction fees, exchange fees and monthly management fees
                    </p>
                </span>
                <button type='submit' className='w-[166px] h-[48px] border border-wh rounded-full text-[16px] font-manrope'>Tokenomics</button>
            </div>
            <BackgroundBeams />
            </BackgroundBeamsWithCollision>
    </div>

  )
}

export default ScallopCoin