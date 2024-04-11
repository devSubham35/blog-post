import React from 'react'
import { FiEdit2 } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import Link from 'next/link';


const ButtonAction = () => {
  return (
    <div className='flex items-center gap-4'>

      <Link href="/blog/edit/id" >
        <button className='active:scale-[0.9] duration-500 bg-black text-white rounded-md px-5 py-2 text-[15px] flex items-center'>
          <FiEdit2 className='mr-2 text-white text-[18px]' />
          Edit
        </button>
      </Link>

      <button className='active:scale-[0.9] duration-500 bg-[#f04747] text-white rounded-md px-5 py-2 text-[15px] flex items-center'>
        <AiOutlineDelete className='mr-2 text-white text-[18px]' />
        Delete
      </button>

    </div>
  )
}

export default ButtonAction
