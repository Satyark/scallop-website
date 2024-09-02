import Image from 'next/image'
import React from 'react'

const Exchanges = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-20 w-full'>
        <span className='flex justify-center items-center '>
          <div className='h-[1.5px] w-[154px] bg-gradient-to-r from-[#FFFFFF] to-[#1A6AF4]'></div>
            <p className='font-manrope font-bold text-[24px] bg-gradient-to-r from-[#1A6AF4] to-[#00DECA] text-transparent bg-clip-text mx-5'>Exchanges</p>
            <div className='h-[1.5px] w-[154px] bg-gradient-to-r from-[#1A6AF4] to-[#FFFFFF]'></div>
        </span>
        <div className='flex justify-center items-center gap-20 mt-10 ml-10'>
            <Image src='/kucoin.svg' alt='' width={207} height={60}/>
            <Image src='/Frame.svg' alt='' width={168} height={60}/>
            <Image src='/mex.svg' alt='' width={325} height={40}/>
        </div>

        <span className='flex justify-center items-center mt-20'>
          <div className='h-[1.5px] w-[154px] bg-gradient-to-r from-[#FFFFFF] to-[#1A6AF4]'></div>
            <p className='font-manrope font-bold text-[24px] bg-gradient-to-r from-[#1A6AF4] to-[#00DECA] text-transparent bg-clip-text mx-5'>Incubated by</p>
            <div className='h-[1.5px] w-[154px] bg-gradient-to-r from-[#1A6AF4] to-[#FFFFFF]'></div>
        </span>
        <div className='flex justify-center items-center gap-20 mt-10'>
            <Image src='/mah.svg' alt='' width={260} height={56}/>
        </div>

        <span className='flex justify-center items-center mt-20'>
          <div className='h-[1.5px] w-[154px] bg-gradient-to-r from-[#FFFFFF] to-[#1A6AF4]'></div>
            <p className='font-manrope font-bold text-[24px] bg-gradient-to-r from-[#1A6AF4] to-[#00DECA] text-transparent bg-clip-text mx-5'>Partners</p>
            <div className='h-[1.5px] w-[154px] bg-gradient-to-r from-[#1A6AF4] to-[#FFFFFF]'></div>
        </span>
        <div className='flex justify-center items-center gap-20 mt-10'>
            <Image src='/ledger.svg' alt='' width={192} height={52}/>
            <Image src='/Frame (1).svg' alt='' width={287} height={47}/>
            <Image src='/image 37.svg' alt='' width={113} height={64}/>
            <Image src='/image 35.svg' alt='' width={276} height={64}/>
        </div>
    </div>
  )
}

export default Exchanges