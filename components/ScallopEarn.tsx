import Image from 'next/image'
import React from 'react'

const ScallopEarn = () => {
  return (
    <div className='flex justify-center items-center'>
        <div className='mb-20'>
            <Image src='/Photo1.svg' alt='/' width={609} height={557}/>
        </div>
        <div className='w-[572px] h-[600px] items-start'>
            <p className='text-[22px] font-manrope font-semibold text-[#1164F4] mt-20'>Scallop Earn</p>
            <p className='text-[48px] font-manrope font-semibold bg-gradient-to-r from-[#000000] to-[#1164F4] text-transparent bg-clip-text break-after-4 '>
                DeFi rewards on fiat 
                deposits
            </p>
            <div className='flex items-start mt-6 gap-6'>
                    <Image src='/sale-1.svg' alt='/' width={32} height={32} />
                    <span className='text-[18px] font-manrope text-[#162647]'>
                        <p>Earn the best rates from Defi protocols like </p>
                        <p>Compound and Aave with all the utility and none of</p>
                        <p>the complexity.</p>
                    </span>
                </div>
        </div>
    </div>
  )
}

export default ScallopEarn