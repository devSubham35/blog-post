'use client'
import { useRouter } from 'next/navigation';
import React from 'react'
import { IoChevronBackOutline } from "react-icons/io5";

const BackButton = () => {

  const router = useRouter()

  return (
    <div onClick={()=>router.back()} className='w-full text-[#939393] mb-10 cursor-pointer'>
      <div className='w-fit flex items-center rounded-full gap-1 duration-300 hover:bg-[#e9e9e977] px-4 py-2'>
        <IoChevronBackOutline className='text-[18px]'/>
        <h1 className='fonr-semibold text-[18px]'>Back</h1>
      </div>
    </div>
  )
}

export default BackButton
