import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer2 = () => {
  return (
    <div className='flex flex-col justify-center items-center mb-20'>
    <div className='flex flex-col md:flex-row justify-center items-start mt-20 md:gap-[180px]'>
        <div className='justify-center items-center mt-10'>
            <div>
            <Image src='/FooterTitle.svg' alt='/' width={156} height={40} />
            <p className='text-[#030319] text-[18px] font-manrope mt-5 opacity-80'>Banking as a service, the way it should be.</p>
            </div>
            <button className='w-[224px] h-[48px] bg-[#E5F1FF] rounded-full text-[#1164F4] flex justify-center items-center my-10'>
                <Image src='/download.svg' alt='/' width={24} height={24} />
                Download Lite paper
            </button>
            <Image src='/Social.svg' alt='/' width={350} height={50}/>
        </div>

        <div className='flex justify-center items-center gap-5 md:gap-20'>
            <span className='font-manrope flex flex-col'>
                <p className='text-[24px] text-[#030319]'>Products</p>
                <Link href='/' className='text-[#030319] text-[16px] mt-5 opacity-80'>Earn</Link>
                <Link href='/' className='text-[#030319] text-[16px] mt-5 opacity-80'>NFT</Link>
                <Link href='/' className='text-[#030319] text-[16px] mt-5 opacity-80'>Tokens</Link>
                <Link href='/' className='text-[#030319] text-[16px] mt-5 opacity-80'>Scallop Chain</Link>
            </span>
            <span className='font-manrope flex flex-col mt-10'>
                <p className='text-[24px] text-[#030319]'>Banking</p>
                <Link href='/' className='text-[#030319] text-[16px] mt-5 opacity-80'>Accounts</Link>
                <Link href='/' className='text-[#030319] text-[16px] mt-5 opacity-80'>Cards</Link>
                <Link href='/' className='text-[#030319] text-[16px] mt-5 opacity-80'>Exchange</Link>
                <Link href='/' className='text-[#030319] text-[16px] mt-5 opacity-80'>Hardware Wallet</Link>
                <Link href='/' className='text-[#030319] text-[16px] mt-5 opacity-80'>Payments</Link>
            </span>
            <span className='font-manrope flex flex-col'>
                <p className='text-[24px] text-[#030319]'>About</p>
                <Link href='/' className='text-[#030319] text-[16px] mt-5 opacity-80'>Team</Link>
                <Link href='/' className='text-[#030319] text-[16px] mt-5 opacity-80'>Backed by</Link>
                <Link href='/' className='text-[#030319] text-[16px] mt-5 opacity-80'>MahaDAO</Link>
                <Link href='/' className='text-[#030319] text-[16px] mt-5 opacity-80'>FAQs</Link>
            </span>
        </div>
    </div>

    <div className='font-manrope text-[#03031999] flex flex-col items-start w-full mt-20'>
        <span className='text-[14px] opacity-90'>
            <p>This website is owned by Scallop Group EU OU based in Estonia.</p>
            <p>Licensed to provide crypto activities in EU with Licence number : FVT000512</p>
            <p>Please visit our terms and conditions for more details.</p>
        </span>
        <div className='flex justify-between items-end text-[#03031999] w-full mt-10'>
            <p>© 2021 Scallop Group. All Rights Reserved.</p>
            <span className='flex justify-between md:gap-10'>
                <Link href='/'>Privacy Policy</Link>
                <Link href='/'>Terms & Conditions</Link>
                <Link href='/'>GDPR Policy</Link>
            </span>
        </div>
    </div>
    </div>
  )
}

export default Footer2