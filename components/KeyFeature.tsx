import Image from 'next/image'
import React from 'react'

const KeyFeature = () => {
  return (
    // bg-gradient-to-b from-[#1A6AF4]
    <div className='flex flex-col justify-center items-center w-full h-[677px]  '> 
        <span className='flex justify-center items-center '>
          <div className='h-[1.5px] w-[154px] bg-gradient-to-r from-[#FFFFFF] to-[#1A6AF4]'></div>
            <p className='font-manrope font-bold text-[32px] bg-gradient-to-r from-[#1A6AF4] to-[#00DECA] text-transparent bg-clip-text mx-5'>Key Features</p>
            <div className='h-[1.5px] w-[154px] bg-gradient-to-r from-[#1A6AF4] to-[#FFFFFF]'></div>
        </span>
        <div className='flex items-center gap-6 mt-10'>
            
            <div className='w-[381px] h-[284px] hover:border hover:shadow-lg rounded-md'>
                <div className='mt-18'>
                <div className='flex justify-center items-center mt-10'>
                    <Image src='/Group 1643.svg' alt='/' width={148} height={95} />
                    <span className='text-[20px] font-manrope font-semibold text-[#162647] -ml-8'>
                        <p>Store crypto and fiat</p>
                        <p>in one place.</p>
                    </span>
                </div>
                <div className='flex justify-center items-start mb-10 gap-3'>
                    <Image src='/tick.svg' alt='/' width={9} height={6} className='mt-7'/>
                    <span className='text-[16px] font-manrope text-[#4F4F4F] mt-5'>
                        <p>Access traditional and decentralised</p>
                        <p>finance with zero friction.</p>
                    </span>
                </div>
                </div>
            </div>

            <div className='w-[381px] h-[284px] hover:border hover:shadow-lg rounded-md'>
                <div className='mt-15'>
                <div className='flex justify-center items-center mt-10'>
                    <Image src='/Group 32160.svg' alt='/' width={135} height={100} className='mt-7' />
                    <span className='text-[20px] font-manrope font-semibold text-[#162647] -ml-8'>
                        <p>Access DeFi from</p>
                        <p>a banking account</p>
                    </span>
                </div>
                <div className='flex justify-center items-start mb-10 gap-3'>
                    <Image src='/tick.svg' alt='/' width={9} height={6} className='mt-2' />
                    <span className='text-[16px] font-manrope text-[#4F4F4F] mt-5'>
                        <p>All the functionality of protocols</p>
                        <p>without the complexity.</p>
                    </span>
                </div>
                </div>
            </div>

            <div className='w-[381px] h-[284px] hover:border hover:shadow-lg rounded-md'>
                <div className='mt-15'>
                <div className='flex justify-center items-center mt-10'>
                    <Image src='/shield.svg' alt='/' width={122} height={100} className='mt-4' />
                    <span className='text-[20px] font-manrope font-semibold text-[#162647] -ml-8'>
                        <p>Keep full control of</p>
                        <p>your keys.</p>
                    </span>
                </div>
                <div className='flex justify-center items-start mb-10 gap-3'>
                    <Image src='/tick.svg' alt='/' width={9} height={6} className='mt-2' />
                    <span className='text-[16px] font-manrope text-[#4F4F4F] '>
                        <p>Our wallets are secured with</p>
                        <p>CC EAL6+ Secure element;</p>
                        <p>Secure Java OS.</p>
                    </span>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default KeyFeature