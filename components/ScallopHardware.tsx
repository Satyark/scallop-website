import Image from 'next/image'
import React from 'react'

const ScallopHardware = () => {
  return (
    <div className='flex justify-center items-center mr-5 md:mr-0'>
        <div className='md:mb-20 justify-start mt-10 mr-10'>
            <Image src='/pendrive.svg' alt='/' width={450} height={450}/>
        </div>
        <div className='w-auto h-auto md:w-[572px] md:h-[600px] md:mt-10'>
            <p className='text-[14px] md:text-[22px] font-manrope font-semibold  text-[#1164F4] mt-20'> Scallop Hardware Wallet</p>
            <p className='text-[20px] md:text-[48px] font-manrope font-semibold bg-gradient-to-r from-[#000000] to-[#1164F4] text-transparent bg-clip-text break-after-4 '>
            Full control of your 
            crypto and your keys
            </p>
            <div className='flex justify-start items-start md:mt-6 gap-2 md:gap-6'>
                <Image src='/Wallet.svg' alt='/' width={32} height={32} className='w-5 h-5 md:w-[32px] md:h-[32px]'/>
                <span className='text-[12px] md:text-[18px] font-manrope text-[#162647]'>
                    <p>Store and trade your crypto using Scallop cold</p>
                    <p>wallets.</p>
                </span>
            </div>
            <div className='flex justify-start items-start md:mt-6 gap-2 md:gap-6'>
                <Image src='/Wallet.svg' alt='/' width={32} height={32} className='w-5 h-5 md:w-[32px] md:h-[32px]' />
                <span className='text-[12px] md:text-[18px] font-manrope text-[#162647]'>
                    <p>Equipped with Infineon <span className='font-bold'>Chip CC EAL 6+ Secure</span></p>
                    <p>Element, the highest grade for the financial industry</p>
                    <p>to protect your private keys.</p>
                </span>
            </div>
        </div>
        <Image src='/Bg2.svg' alt='/' width={362} height={227} className='hidden md:block absolute mb-[740px] -right-[100px]'/>

    </div>
  )
}

export default ScallopHardware;