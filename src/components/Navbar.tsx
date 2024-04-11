import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className='w-full py-6 mb-10 flex items-center justify-between'>
                <Link href="/" >
                    <h1 className='font-bold text-[22px]'>Blog Post</h1>
                </Link>
                <Link href="/blog/create" >
                    <button className='w-fit active:scale-[0.9] duration-500 cursor-pointer py-2 px-4 rounded-lg items-center bg-[#000000] text-white font-semibold'>Create Post +</button>
                </Link>
            </div>
        </>
    )
}

export default Navbar
