import Image from 'next/image'
import React from 'react'

const ScallopCards = () => {
  return (
    <div className='flex justify-center items-center mr-5 md:mr-0 mt-10 md:mt-0'>
        <div className='md:mb-20 justify-start'>
            <Image src='/card-3 2.svg' alt='/' width={589} height={589}/>
        </div>
        <div className='w-auto h-auto md:w-[572px] md:h-[600px] md:mt-10'>
            <p className='text-[14px] md:text-[22px] font-manrope font-semibold  text-[#2DCA8C] md:mt-20'> Scallop Cards</p>
            <p className='text-[20px] md:text-[48px] font-manrope font-semibold bg-gradient-to-r from-[#000000] to-[#2DCA8C] text-transparent bg-clip-text break-after-4 '>
            The only  card 
            you’ll ever need
            </p>
            <div className='flex justify-start items-start md:mt-6 gap-2 md:gap-6'>
                <Image src='/CArd Icon.svg' alt='/' width={32} height={32} className='w-5 h-5 md:w-[32px] md:h-[32px]'/>
                <span className='text-[12px] md:text-[18px] font-manrope text-[#162647]'>
                    <p>Buy the things you love with Scallop card using</p>
                    <p>crypto or fiat.</p>
                </span>
            </div>
            <div className='flex justify-start items-start md:mt-6 gap-2 md:gap-6'>
                <Image src='/CArd Icon.svg' alt='/' width={32} height={32} className='w-5 h-5 md:w-[32px] md:h-[32px]' />
                <span className='text-[12px] md:text-[18px] font-manrope text-[#162647]'>
                    <p>Goodbye plastic, hello metal!</p>
                    <p>Titanium metal cards for Elite members.</p>
                </span>
            </div>
        </div>
    </div>
  )
}

export default ScallopCards;