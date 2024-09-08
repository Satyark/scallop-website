import Image from 'next/image'
import React from 'react'

const FAQs = () => {
  return (
    <div className='relative flex flex-col justify-center items-center w-full h-[950px] border'>
         <span className='flex justify-center items-center '>
          <div className='h-[1.5px] w-[154px] bg-gradient-to-r from-[#FFFFFF] to-[#1A6AF4]'></div>
            <p className='font-manrope font-bold text-[32px] bg-gradient-to-r from-[#1A6AF4] to-[#00DECA] text-transparent bg-clip-text mx-5'>Frequently asked questions</p>
            <div className='h-[1.5px] w-[154px] bg-gradient-to-r from-[#1A6AF4] to-[#FFFFFF]'></div>
        </span>
        <p className='font-manrope text-[18px] text-[#4F4F4F] mt-3'> Below we’ve answered some common questions around Scallop, crypto and our services.</p>
        <p className='font-manrope text-[18px] text-[#4F4F4F]'>Feel free to ask anything else in our telegram group or drop us an email! </p>

        <div className='w-[1144px] h-[600px] flex justify-center items-center'>
            <div className='flex justify-center gap-10 items-center bg-gradient-to-r from-[#6354FF] to-[#00DECA] h-[214px] w-full rounded-[16px]'>
                <p className='font-manrope text-[32px] font-semibold'>Stay up to date with Scallop</p>
                <div className='flex justify-between items-center w-[463px] h-[48px] bg-white rounded-full'>
                    {/* <p className='text-[#8B959E] text-[14px] font-manrope ml-7'>Email Address</p> */}
                    <input type="text" placeholder='Email Address' className='ml-7 text-black' />
                    <button className='flex justify-center items-center w-[168px] h-[48px] bg-[#272727] rounded-full text-[16px] font-manrope'>
                    Get early Access
                    </button>
                </div>
            </div>
        </div>
            <Image src='/Backdrop.svg' alt='/' width={362} height={227} className='absolute mt-[470px] -left-10'/>
            <Image src='/Bg2.svg' alt='/' width={362} height={227} className='absolute mb-[340px] -right-10'/>
    </div>
  )
}

export default FAQs