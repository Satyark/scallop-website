import Image from 'next/image'
import React from 'react'

const BackedBy = () => {
    const companies = [
        {name: 'Kucoin Labs', image:'/KucoinLabs.svg'},
        {name: 'Bitcoin.com Exchange', image:'/Bitcoin.svg'},
        {name: 'NetZero Capital', image:'/NetZero.svg'},
        {name: 'X21 Digital', image:'/X21.svg'},
        {name: 'Blackedge Capital', image:'/Blackedge.svg'},
        {name: 'MahaDAO', image:'/MahaDAO.svg'},
        {name: 'Magnus Capital', image:'/Magnus.svg'},
        {name: 'ETHDesign', image:'/ETHDesign.svg'},
        {name: 'Market Across', image:'/Market.svg'},
        {name: 'J8 Ventures', image:'/J8.svg'},
        {name: 'AU21 Capital', image:'/AU21.svg'},
        {name: 'Black Dragon', image:'/BlackDragon.svg'},
        {name: 'Oracles Investment Group', image:'/Oracles.svg'},
        {name: 'Spark Digital Capital', image:'/Spark.svg'},
        {name: 'Stakez Capital', image:'/Stakez.svg'},
        {name: 'Banter Capital', image:'/Banter.svg'},
        {name: 'Amesten Capital', image:'/Amesten.svg'},
        {name: 'Basics Capital', image:'/Basics.svg'}
    ]
    const lastThree = [
        {name: 'Octopus Crypto Capital', image:'/Octopus.svg'},
        {name: 'ZBS Capital', image:'/ZBS.svg'},
        {name: 'CTS Capital', image:'/CTS.svg'}
    ]
  return (
    <div className='flex flex-col justify-center items-center mt-20 w-full'>
        <span className='flex justify-center items-center '>
          <div className='h-[1.5px] w-[154px] bg-gradient-to-r from-[#FFFFFF] to-[#1A6AF4]'></div>
            <p className='font-manrope font-bold text-[24px] bg-gradient-to-r from-[#1A6AF4] to-[#00DECA] text-transparent bg-clip-text mx-5'>Backed by</p>
            <div className='h-[1.5px] w-[154px] bg-gradient-to-r from-[#1A6AF4] to-[#FFFFFF]'></div>
        </span>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 mt-10 justify-center items-center mb-5">
            {companies.map((company,index)=>(
                <div className='flex flex-col justify-center items-center'>
                <Image src={company.image} alt='/' width={100} height={100}/>
                <p className='font-manrope text-[#4F4F4F] text-[18px] mt-6'>{company.name}</p>
                </div>
            ))}
        </div>
        <div className="grid grid-cols-3 gap-10 mt-10 justify-center items-center">
            {lastThree.map((company,index)=>(
                <div className='flex flex-col justify-center items-center'>
                <Image src={company.image} alt='/' width={100} height={100}/>
                <p className='font-manrope text-[#4F4F4F] text-[18px] mt-6'>{company.name}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default BackedBy