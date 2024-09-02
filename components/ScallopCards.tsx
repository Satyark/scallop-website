import Image from 'next/image'
import React from 'react'

const ScallopCards = () => {
  return (
    <div className='flex justify-center items-center'>
        <div className='mb-20 justify-start'>
            <Image src='/card-3 2.svg' alt='/' width={589} height={589}/>
        </div>
        <div className='w-[572px] h-[600px] mt-10'>
            <p className='text-[22px] font-manrope font-semibold  text-[#2DCA8C] mt-20'> Scallop Cards</p>
            <p className='text-[48px] font-manrope font-semibold bg-gradient-to-r from-[#000000] to-[#2DCA8C] text-transparent bg-clip-text break-after-4 '>
            The only  card 
            you’ll ever need
            </p>
            <div className='flex justify-start items-start mt-6 gap-6'>
                <Image src='/CArd Icon.svg' alt='/' width={32} height={32} />
                <span className='text-[18px] font-manrope text-[#162647]'>
                    <p>Buy the things you love with Scallop card using</p>
                    <p>crypto or fiat.</p>
                </span>
            </div>
            <div className='flex justify-start items-start mt-6 gap-6'>
                <Image src='/CArd Icon.svg' alt='/' width={32} height={32} />
                <span className='text-[18px] font-manrope text-[#162647]'>
                    <p>Goodbye plastic, hello metal!</p>
                    <p>Titanium metal cards for Elite members.</p>
                </span>
            </div>
        </div>
    </div>
  )
}

export default ScallopCards;