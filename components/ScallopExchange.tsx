import Image from 'next/image'
import React from 'react'

const ScallopExchange = () => {
  return (
    <div className='flex justify-center items-center'>
        <div className='mb-20'>
            <Image src='/Exchange.svg' alt='/' width={480} height={548}/>
        </div>
        <div className='w-[572px] h-[600px]'>
            <p className='text-[22px] font-manrope font-semibold  text-[#2DCA8C] mt-20'> Scallop Exchange</p>
            <p className='text-[48px] font-manrope font-semibold bg-gradient-to-r from-[#000000] to-[#2DCA8C] text-transparent bg-clip-text break-after-4 '>
            Fiat currencies meet 
            native tokens
            </p>
            <div className='flex justify-start items-start mt-6 gap-6'>
            <Image src='/chart-pie.svg' alt='/' width={32} height={32} />
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

export default ScallopExchange;