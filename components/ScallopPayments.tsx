import Image from 'next/image'
import React from 'react'

const ScallopPayments = () => {
  return (
    <div className='flex justify-center items-center mt-10 md:mt-0 ml-5 md:ml-0'>
        <div className='w-auto h-auto md:w-[572px] md:h-[600px]'>
            <p className='text-[14px] md:text-[22px] font-manrope font-semibold text-[#2DCA8C] md:mt-20 md:ml-20'>Scallop Payments</p>
            <p className='text-[20px] md:text-[48px] font-manrope font-semibold bg-gradient-to-r from-[#000000] to-[#2DCA8C] text-transparent bg-clip-text break-after-4 md:ml-20'>
            Send & receive fiat
            & crypto in a click
            </p>
            <div className='flex justify-center items-start md:mt-10 gap-2 md:gap-6'>
                <Image src='/Send.svg' alt='/' width={32} height={32} className='w-5 h-5 md:w-[32px] md:h-[32px]' />
                <span className='text-[12px] md:text-[18px] font-manrope text-[#162647]'>
                    <p>Send & receive money in <span className='font-bold'>all major</span></p>
                    <p><span className='font-bold'>currencies and tokens.</span></p>
                </span>
            </div>
            <div className='flex justify-center items-start md:mt-10 gap-2 md:gap-6'>
                <Image src='/Send.svg' alt='/' width={32} height={32} className='w-5 h-5 md:w-[32px] md:h-[32px]' />
                <span className='text-[12px] md:text-[18px] font-manrope text-[#162647]'>
                    <p>Make your <span className='font-bold'>payments</span>to any service with <span className='font-bold'>any</span></p>
                    <p><span className='font-bold'>token or currency</span> in your wallet.</p>
                </span>
            </div>
        </div>
        <div className='md:mb-20'>
            <Image src='/Payments.svg' alt='/' width={620} height={557}/>
        </div>
    </div>
  )
}

export default ScallopPayments;