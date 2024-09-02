import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-white w-full h-[88px]'>
    <div className='w-full h-[88px] flex justify-between'>
        <span className='flex justify-between items-center ml-20'>
        <Image src='/Group.svg' alt='' width={40} height={40}/>
        <Image src='/Scallop.svg' alt='' width={105} height={28} className='mx-2'/>
        </span>

        <div className='flex items-center  mr-20'>
        <div className="grid grid-cols-3 gap-x-5 items-center mr-2">
            {/* <div className="flex items-center"> */}
              <button className="text-[16px] font-manrope text-[#000000] hover:text-black inline-flex items-center">
                Products
                <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.707a1 1 0 011.414 0L10 11.293l3.293-3.586a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              <button className="text-[16px] font-manrope text-[#000000] hover:text-black inline-flex items-center">
                About
                <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.707a1 1 0 011.414 0L10 11.293l3.293-3.586a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              <button className="text-[16px] font-manrope text-[#000000] hover:text-black inline-flex items-center">
              Lite paper
              </button>
          </div>
          <button className='rounded-[32px] bg-[#272727] font-manrope w-[198px] h-[48px]'>
            Explore the app
            </button>
            </div>
    </div>
    </nav>
    // <nav className="bg-white shadow-md">
    //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //     <div className="flex justify-between items-center h-16">
    //       {/* Left: Logo */}
    //       <div className="flex-shrink-0">
    //         <Link href="/">
    //           <img src="/logo.png" alt="Scallop Logo" className="h-8" />
    //         </Link>
    //       </div>

    //       {/* Center: Navigation Links */}
    //       <div className="hidden md:flex space-x-8">
    //         <div className="relative group">
    //           <button className="text-gray-700 hover:text-black inline-flex items-center">
    //             Products
    //             <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
    //               <path
    //                 fillRule="evenodd"
    //                 d="M5.293 7.707a1 1 0 011.414 0L10 11.293l3.293-3.586a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
    //                 clipRule="evenodd"
    //               />
    //             </svg>
    //           </button>
    //           {/* Dropdown Menu */}
    //           <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20 hidden group-hover:block">
    //             <Link href="/product1">
    //               {/* <a className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Product 1</a> */}
    //             </Link>
    //             <Link href="/product2">
    //               {/* <a className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Product 2</a> */}
    //             </Link>
    //           </div>
    //         </div>

    //         <div className="relative group">
    //           <button className="text-gray-700 hover:text-black inline-flex items-center">
    //             About
    //             <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
    //               <path
    //                 fillRule="evenodd"
    //                 d="M5.293 7.707a1 1 0 011.414 0L10 11.293l3.293-3.586a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
    //                 clipRule="evenodd"
    //               />
    //             </svg>
    //           </button>
    //           {/* Dropdown Menu */}
    //           <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20 hidden group-hover:block">
    //             <Link href="/about">
    //               {/* <a className="block px-4 py-2 text-gray-800 hover:bg-gray-100">About Us</a> */}
    //             </Link>
    //             <Link href="/team">
    //               {/* <a className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Our Team</a> */}
    //             </Link>
    //           </div>
    //         </div>

    //         <Link href="/lite-paper">
    //           {/* <a className="text-gray-700 hover:text-black">Lite paper</a> */}
    //         </Link>
    //       </div>

    //       {/* Right: Button */}
    //       <div className="flex items-center">
    //         <Link href="/explore">
    //           {/* <a className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition duration-300"> */}
    //             Explore the app
    //           {/* </a> */}
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </nav>
  )
}

export default Navbar