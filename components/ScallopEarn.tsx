import Image from 'next/image'
import React from 'react'

const ScallopEarn = () => {
  return (
    <div className='flex justify-center items-center'>
        <div className='mt-10 md:mb-20'>
            <Image src='/Photo1.svg' alt='/' width={609} height={557}/>
        </div>
        <div className='w-auto h-auto md:w-[572px] md:h-[600px] items-start mr-5 md:mr-0'>
            <p className='text-[14px] md:text-[22px] font-manrope font-semibold text-[#1164F4] mt-20'>Scallop Earn</p>
            <p className='text-[20px] md:text-[48px] font-manrope font-semibold bg-gradient-to-r from-[#000000] to-[#1164F4] text-transparent bg-clip-text break-after-4 '>
                DeFi rewards on fiat 
                deposits
            </p>
            <div className='flex items-start md:mt-6 md:gap-6'>
                    <Image src='/sale-1.svg' alt='/' width={32} height={32} />
                    <span className='text-[12px] md:text-[18px] font-manrope text-[#162647]'>
                        <p>Earn the best rates from Defi protocols like </p>
                        <p>Compound and Aave with all the utility and none of</p>
                        <p>the complexity.</p>
                    </span>
                </div>
        </div>
        <Image src='/Bg2.svg' alt='/' width={362} height={227} className='hidden md:block absolute mb-[740px] -right-[100px]'/>
    </div>
  )
}

export default ScallopEarn