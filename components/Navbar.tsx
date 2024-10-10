// import Image from 'next/image'
// import Link from 'next/link'
// import React from 'react'

// const Navbar = () => {
//   return (
//     <nav className='bg-white w-full h-[88px]'>
//     <div className='w-full h-[88px] flex justify-between'>
//         <span className='flex justify-between items-center ml-20'>
//         <Image src='/Group.svg' alt='' width={40} height={40}/>
//         <Image src='/Scallop.svg' alt='' width={105} height={28} className='mx-2'/>
//         </span>

//         <div className='flex items-center  mr-20'>
//         <div className="grid grid-cols-3 gap-x-5 items-center mr-2">
//               <button className="text-[16px] font-manrope text-[#000000] hover:text-black inline-flex items-center">
//                 Products
//                 <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
//                   <path
//                     fillRule="evenodd"
//                     d="M5.293 7.707a1 1 0 011.414 0L10 11.293l3.293-3.586a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </button>

//               <button className="text-[16px] font-manrope text-[#000000] hover:text-black inline-flex items-center">
//                 About
//                 <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
//                   <path
//                     fillRule="evenodd"
//                     d="M5.293 7.707a1 1 0 011.414 0L10 11.293l3.293-3.586a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </button>

//               <button className="text-[16px] font-manrope text-[#000000] hover:text-black inline-flex items-center">
//               Lite paper
//               </button>
//           </div>
//           <button className='rounded-[32px] bg-[#272727] font-manrope w-[198px] h-[48px]'>
//             Explore the app
//             </button>
//             </div>
//     </div>
//     </nav>
    
//   )
// }

// export default Navbar

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Dropdown from './DropDown'

const Navbar = () => {
  return (
    <nav className='bg-white w-full h-[88px]'>
      <div className='w-full h-[88px] flex justify-between items-center px-4 sm:px-8 lg:px-20'>
        {/* Logo Section */}
        <div className='flex items-center'>
          <Image src='/Group.svg' alt='Logo Icon' width={40} height={40} />
          <Image src='/Scallop.svg' alt='Logo Text' width={105} height={28} className='mx-2' />
        </div>

        {/* Navigation and Buttons */}
        <div className='flex items-center'>
          {/* Menu for larger screens */}
          <div className="hidden lg:grid grid-cols-3 gap-x-5 items-center mr-6">
            {/* <button className="text-[16px] font-manrope text-[#000000] hover:text-black inline-flex items-center">
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
            </button> */}
                  <Dropdown title='Products'/>
                  <Dropdown title='About'/>

            <button className="text-[16px] font-manrope text-[#000000] hover:text-black inline-flex items-center">
              Lite paper
            </button>
          </div>

          {/* Explore Button */}
          <button className='rounded-[32px] bg-[#272727] text-white font-manrope w-[160px] sm:w-[198px] h-[40px] sm:h-[48px]'>
            Explore the app
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden flex justify-end px-4">
        <button className="text-black">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4 5h16M4 12h16m-7 7h7" />
          </svg>
        </button>
      </div>
    </nav>
  )
}

export default Navbar;
