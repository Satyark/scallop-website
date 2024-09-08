import Image from 'next/image'
import React from 'react'

const ScallopNFT = () => {
  return (
    <div className='flex justify-center items-center ml-5 md:ml-0'>
        <div className='w-auto h-auto md:w-[572px] md:h-[600px]'>
            <p className='text-[14px] md:text-[22px] font-manrope font-semibold text-[#2DCA8C] mt-20 md:ml-20'>Scallop NFT</p>
            <p className='text-[20px] md:text-[48px] font-manrope font-semibold bg-gradient-to-r from-[#000000] to-[#2DCA8C] text-transparent bg-clip-text break-after-4 md:ml-20'>
            Trade NFTs with fiat 
            for the first time
            </p>
            <div className='flex justify-center items-start md:mt-6 md:gap-6'>
                    <Image src='/chart-pie.svg' alt='/' width={32} height={32} />
                    <span className='text-[12px] md:text-[18px] font-manrope text-[#162647]'>
                        <p>Buy, sell and leverage digital content using a</p>
                        <p>built-in NFT marketplace synced with</p>
                        <p>accounts, providing extra layer of security</p>
                        <p>and peace of  mind.</p>
                    </span>
                </div>
        </div>
        <div className='mt-10 md:mb-20'>
            <Image src='/NFT.svg' alt='/' width={572} height={600}/>
        </div>
        <Image src='/Backdrop.svg' alt='/' width={300} height={227} className='hidden md:block absolute mt-[470px] -left-10'/>
    </div>
  )
}

export default ScallopNFT;