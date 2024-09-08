import Image from 'next/image'
import React from 'react'

const ScallopExchange = () => {
  return (
    <div className='flex justify-center items-center'>
        <div className='mt-20 md:mb-20'>
            <Image src='/Exchange.svg' alt='/' width={480} height={548}/>
        </div>
        <div className='w-auto h-auto md:w-[572px] md:h-[600px] items-start'>
            <p className='text-[14px] md:text-[22px] font-manrope font-semibold  text-[#2DCA8C] mt-20'> Scallop Exchange</p>
            <p className='text-[20px] md:text-[48px] font-manrope font-semibold bg-gradient-to-r from-[#000000] to-[#2DCA8C] text-transparent bg-clip-text break-after-4 '>
            Fiat currencies meet 
            native tokens
            </p>
            <div className='flex justify-start items-start md:mt-6 md:gap-6'>
            <Image src='/chart-pie.svg' alt='/' width={32} height={32} />
                    <span className='text-[12px] md:text-[18px] font-manrope text-[#162647]'>
                        <p>Earn the best rates from Defi protocols like </p>
                        <p>Compound and Aave with all the utility and none of</p>
                        <p>the complexity.</p>
                    </span>
                </div>
        </div>
    </div>
  )
}

export default ScallopExchange;