import Image from 'next/image'
import React from 'react'

const ScallopChain = () => {
  return (
    <div className='flex justify-center items-center'>
        <div className='mb-20 justify-start mt-20'>
            <Image src='/Chain.svg' alt='/' width={778} height={778}/>
        </div>
        <div className='w-[572px] h-[600px] -ml-20'>
            <p className='text-[22px] font-manrope font-semibold  text-[#1164F4] mt-20'> Scallop Chain</p>
            <p className='text-[48px] font-manrope font-semibold bg-gradient-to-r from-[#000000] to-[#1164F4] text-transparent bg-clip-text break-after-4 '>
            Next-gen cross-chain 
            banking platform
            </p>
            <div className='flex justify-start items-start mt-6 gap-6'>
                <Image src='/Wallet.svg' alt='/' width={32} height={32} />
                <span className='text-[18px] font-manrope text-[#162647]'>
                    <p>Scallop chain is a complete single-binary</p>
                    <p>blockchain distribution which supports both</p>
                    <p>EVM & WASM based smart contracts.</p>
                </span>
            </div>
            <div className='flex justify-start items-start mt-6 gap-6'>
                <Image src='/Wallet.svg' alt='/' width={32} height={32} />
                <span className='text-[18px] font-manrope text-[#162647]'>
                    <p>Scallop plans to connect<span className='font-bold'>connect traditional</span></p>
                    <p><span className='font-bold'>banks with cross blockchain applications.</span></p>
                    <p>Institutional partners work directly with</p>
                    <p>Scallop, allowing them to create secure</p>
                    <p>custody services, interest bearing savings</p>
                    <p>accounts, debit cards and a fiat on-ramp to</p>
                    <p>crypto.</p>
                </span>
            </div>
        </div>
    </div>
  )
}

export default ScallopChain;