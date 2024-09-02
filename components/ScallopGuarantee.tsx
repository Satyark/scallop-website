import Image from 'next/image'
import React from 'react'

const ScallopGuarantee = () => {
  return (
    <div className='flex justify-center items-center mt-20'>
        <div className='w-[572px] h-[600px]'>
            <p className='text-[22px] font-manrope font-semibold text-[#1164F4] mt-20 ml-20'>Scallop Guarantee</p>
            <p className='text-[48px] font-manrope font-semibold bg-gradient-to-r from-[#000000] to-[#1164F4] text-transparent bg-clip-text break-after-4 ml-20'>
            Regulated, secured 
            and insured
            </p>
            <div className='flex justify-center items-start mt-8 gap-6 mr-2'>
                    <Image src='/Shield2.svg' alt='/' width={32} height={32} />
                    <span className='text-[18px] font-manrope text-[#162647]'>
                        <p>Regulated as an EMD for an Electronic Money</p>
                        <p>Institution (EMI) in the UK and as Electronic</p>
                        <p>Money Intermediary in Europe.</p>
                    </span>
                </div>
                <div className='flex justify-center items-start mt-6 gap-6 mr-10'>
                    <Image src='/Shield2.svg' alt='/' width={32} height={32} />
                    <span className='text-[18px] font-manrope text-[#162647]'>
                        <p>Scallop cold/hot storage are insured by our</p>
                        <p>partners against loss by up to <span className='font-bold'>$100 million.</span></p>
                    </span>
                </div>
                <div className='flex justify-center items-start mt-6 gap-6 mr-10'>
                    <Image src='/Shield2.svg' alt='/' width={32} height={32} />
                    <span className='text-[18px] font-manrope text-[#162647]'>
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