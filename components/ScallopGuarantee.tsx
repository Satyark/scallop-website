import Image from 'next/image'
import React from 'react'

const ScallopGuarantee = () => {
  return (
    <div className='flex justify-center items-center md:mt-20 ml-5 md:ml-0'>
        <div className='w-auto h-auto md:w-[572px] md:h-[600px]'>
            <p className='text-[14px] md:text-[22px] font-manrope font-semibold text-[#1164F4] mt-20 md:ml-20'>Scallop Guarantee</p>
            <p className='text-[20px] md:text-[48px] font-manrope font-semibold bg-gradient-to-r from-[#000000] to-[#1164F4] text-transparent bg-clip-text break-after-4 md:ml-20'>
            Regulated, secured 
            and insured
            </p>
            <div className='flex justify-center items-start md:mt-8 gap-2 md:gap-6 mr-2'>
                    <Image src='/Shield2.svg' alt='/' width={32} height={32} className='w-5 h-5 md:w-[32px] md:h-[32px]' />
                    <span className='text-[12px] md:text-[18px] font-manrope text-[#162647]'>
                        <p>Regulated as an EMD for an Electronic Money</p>
                        <p>Institution (EMI) in the UK and as Electronic</p>
                        <p>Money Intermediary in Europe.</p>
                    </span>
                </div>
                <div className='flex justify-center items-start md:mt-6 gap-2 md:gap-6 mr-10'>
                    <Image src='/Shield2.svg' alt='/' width={32} height={32} className='w-5 h-5 md:w-[32px] md:h-[32px]'/>
                    <span className='text-[12px] md:text-[18px] font-manrope text-[#162647]'>
                        <p>Scallop cold/hot storage are insured by our</p>
                        <p>partners against loss by up to <span className='font-bold'>$100 million.</span></p>
                    </span>
                </div>
                <div className='flex justify-center items-start md:mt-6 gap-2 md:gap-6'>
                    <Image src='/Shield2.svg' alt='/' width={32} height={32} className='w-5 h-5 md:w-[32px] md:h-[32px]' />
                    <span className='text-[12px] md:text-[18px] font-manrope text-[#162647]'>
                        <p>Fiat funds are stored under <span className='font-bold'>FCA</span> regulation</p>
                        <p>with all money safeguarded by licensed</p>
                        <p>banks.</p>
                    </span>
                </div>
        </div>
        <div className='mt-10'>
            <Image src='/shield4 1.svg' alt='/' width={459} height={459}/>
        </div>
    </div>
  )
}

export default ScallopGuarantee;