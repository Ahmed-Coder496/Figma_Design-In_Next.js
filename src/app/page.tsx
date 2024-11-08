import Header from '@/component/Header/Header'
import Hero from '@/component/Hero/Hero'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div>
      <div className=' h-[134px] bg-[#A29875]'>
        <h1 className='font-normal text-[#FFFFFF] w-[439px] h-[94px] pt-[20px] pl-[36px] text-[75px]'>MANZZARI</h1>
      </div>
      <div>
      <div className="flex-none w-1/2 float-left">
        <h2 className="w-[496px] h-[189px] text-[40px] font-bold text-left ml-[87px] mt-[65px]">IMPECCABLE CRAFTSMANSHIP AND FINESSE</h2>
        <Image src={require("../../public/image2.png")} alt="" className="w-[902px] h-[147px] ml-[87px]  mt-[65px]"/>
        <button className="w-[288px] h-[58px]  p-[10px] rounded-[10px] bg-[#A29875] ml-[87px]  mt-[65px]">Explore Now</button>
      </div>
      <div className="flex-none w-1/2 float-left">
        <Image src={require("../../public/image.svg")} alt="" className="w-[462px] h-[647px] ml-[87px]"/>
      </div>
    </div>
    </div>
  )
}

export default page
