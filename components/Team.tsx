import Image from 'next/image'
import React from 'react'

const Team = () => {
    const teamMembers = [
        { name: "Raj Bagadi", title: "Founder & CEO", imageUrl: "/ceo.svg" },
        { name: "Mindy Bejawn", title: "Co-Founder & COO", imageUrl: "/Vector.svg" },
        { name: "Pawan Pandey", title: "VP Tech", imageUrl: "/Vector (1).svg" },
        { name: "Erion Andoni", title: "MLRO", imageUrl: "/Vector (2).svg" },
        { name: "Amrit Mirchandani", title: "Growth Manager", imageUrl: "/image 20.svg" },
        { name: "Hargobind Gupta", title: "Senior Blockchain Architect", imageUrl: "/Vector (3).svg" },
        { name: "Kim Kam", title: "Head of HR", imageUrl: "/Vector (4).svg" },
        { name: "Dhaval Kalsariya", title: "Head of Design", imageUrl: "/Vector (5).svg" },
      ];
    
    const lastThree = [
        { name: "Karampal Singh", title: "Head of PR", imageUrl: "/Vector (6).svg" },
        { name: "Shivangini Agarwal", title: "Brand Manager", imageUrl: "/Vector (7).svg" },
        { name: "Urmas Rooba", title: "LD/AML - Europe", imageUrl: "/image 31.svg" },
    ];
  return (
    
    <div className='flex flex-col justify-center items-center mt-20'>
        <span className='flex justify-center items-center '>
          <div className='h-[1.5px] w-[154px] bg-gradient-to-r from-[#FFFFFF] to-[#1A6AF4]'></div>
            <p className='font-manrope font-bold text-[32px] bg-gradient-to-r from-[#1A6AF4] to-[#00DECA] text-transparent bg-clip-text mx-5'>Team</p>
            <div className='h-[1.5px] w-[154px] bg-gradient-to-r from-[#1A6AF4] to-[#FFFFFF]'></div>
        </span>
        <span className='hidden md:block'>
        <p className='font-manrope text-[18px] text-[#4F4F4F] mt-3'>Domain experts from technology, finance and compliance coming together to pioneer </p>
        <p className='font-manrope text-[18px] text-[#4F4F4F]'>crypto-first banking.</p>
        </span>
        <div className='flex justify-center items-center font-manrope text-[18px] my-10'>
            <span className='flex justify-center items-center w-[248px] h-[56px] text-[#4F4F4F] hover:text-[#1A6AF4] hover:shadow-lg'>
                Core Team
            </span>
            <span className='flex justify-center items-center w-[248px] h-[56px] text-[#4F4F4F] hover:text-[#1A6AF4] hover:shadow-lg'>
                Advisory Team
            </span>
        </div>
        {/* <div className="container mx-auto my-12 p-4"> */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-20">
        {teamMembers.map((member, index) => (
          <div key={index} className="text-center">
            <div className="">
              <Image
                src={member.imageUrl}
                alt={member.name}
                width={150}
                height={152}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <h3 className="mt-4 font-manrope text-[16px] text-[#1A6AF4]">{member.name}</h3>
            <p className="text-black font-manrope text-[14px]">{member.title}</p>
          </div>
        ))}
      </div>
    {/* </div> */}
    {/* <div className="container mx-auto my-12 p-4"> */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-20 justify-center items-center mt-10">
        {lastThree.map((member, index) => (
          <div key={index} className="text-center">
            <div className="">
              <Image
                src={member.imageUrl}
                alt={member.name}
                width={150}
                height={152}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <h3 className="mt-4 font-manrope text-[16px] text-[#1A6AF4]">{member.name}</h3>
            <p className="text-black font-manrope text-[14px]">{member.title}</p>
          </div>
        ))}
      </div>
    {/* </div> */}
    <Image src='/Bg2.svg' alt='/' width={362} height={227} className='hidden md:block absolute mb-[740px] -right-[200px]'/>
        
    </div>
  )
}

export default Team