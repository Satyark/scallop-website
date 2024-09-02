import Image from 'next/image'
import React from 'react'

const ScallopPayments = () => {
  return (
    <div className='flex justify-center items-center'>
        <div className='w-[572px] h-[600px] '>
            <p className='text-[22px] font-manrope font-semibold text-[#2DCA8C] mt-20 ml-20'>Scallop Payments</p>
            <p className='text-[48px] font-manrope font-semibold bg-gradient-to-r from-[#000000] to-[#2DCA8C] text-transparent bg-clip-text break-after-4 ml-20'>
            Send & receive fiat
            & crypto in a click
            </p>
            <div className='flex justify-center items-start mt-10 gap-6'>
                <Image src='/Send.svg' alt='/' width={32} height={32} />
                <span className='text-[18px] font-manrope text-[#162647]'>
                    <p>Send & receive money in <span className='font-bold'>all major</span></p>
                    <p><span className='font-bold'>currencies and tokens.</span></p>
                </span>
            </div>
            <div className='flex justify-center items-start mt-6 gap-6'>
                <Image src='/Send.svg' alt='/' width={32} height={32} />
                <span className='text-[18px] font-manrope text-[#162647]'>
                    <p>Make your <span className='font-bold'>payments</span>to any service with <span className='font-bold'>any</span></p>
                    <p><span className='font-bold'>token or currency</span> in your wallet.</p>
                </span>
            </div>
        </div>
        <div className='mb-20'>
            <Image src='/Payments.svg' alt='/' width={620} height={557}/>
        </div>
    </div>
  )
}

export default ScallopPayments;