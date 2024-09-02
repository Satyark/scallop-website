import Image from 'next/image'
import React from 'react'

const Footer1 = () => {
  return (
    <div className='w-full h-[153px] flex justify-center items-center bg-[#1D2D3C] gap-20 pt-8'>
        <Image src='/visa.svg' alt='' width={105} height={32} />
        <Image src='/set.svg' alt='' width={48} height={48} />
        <Image src='/sepa.svg' alt='' width={117} height={32} />
        <Image src='/faster.svg' alt='' width={67} height={48} />
    </div>
  )
}

export default Footer1