import Image from 'next/image'
import React from 'react'

const ScallopAccount = () => {
  return (
    <div className='flex justify-center items-center md:mt-20 ml-5 md:ml-0'>
        <div className='w-auto h-auto md:w-[572px] md:h-[600px]'>
            <p className='text-[14px] md:text-[22px] font-manrope font-semibold text-[#1164F4] mt-20 md:ml-20'>Scallop Accounts</p>
            <p className='text-[20px] md:text-[48px] font-manrope font-semibold bg-gradient-to-r from-[#000000] to-[#1164F4] text-transparent bg-clip-text break-after-4 md:ml-20'>
            Your global fiat 
            accounts
            </p>
            <div className='flex justify-center items-start md:mt-6 gap-2 md:gap-6'>
                    <Image src='/House.svg' alt='/' width={32} height={32} className='w-5 h-5 md:w-[32px] md:h-[32px]' />
                    <span className='text-[12px] md:text-[18px] font-manrope text-[#162647]'>
                        <p>Open GBP and IBAN accounts  for daily use,</p>
                        <p>for both personal and business users.</p>
                    </span>
                </div>
                <div className='flex justify-center items-start md:mt-6 gap-2 md:gap-6'>
                    <Image src='/House.svg' alt='/' width={32} height={32} className='w-5 h-5 md:w-[32px] md:h-[32px]' />
                    <span className='text-[12px] md:text-[18px] font-manrope text-[#162647]'>
                        <p>Over 15 multi currency fiat wallets which can</p>
                        <p>accumulate interest through Scallop Earn.</p>
                    </span>
                </div>
                <span className='flex flex-col md:flex-row justify-center items-center gap-3 my-5 mr-7'>
        <p className='text-[12px] md:text-[16px] text-[#4F4F4F] opacity-60 font-manrope mr-2'>Coming soon for 747M users in :</p>
        <Image src='/Group 1648.svg' alt='/' width={112} height={32} />
      </span>
        </div>
        <div className='mb-20'>
            <Image src='/Bank.svg' alt='/' width={569} height={442}/>
        </div>
    </div>
  )
}

export default ScallopAccount;