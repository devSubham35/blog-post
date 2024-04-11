import React from 'react'

const PostCard = () => {
  return (
    <div className='bg-[#f5f5f5] drop-shadow-xl border-[1px] rounded-xl p-4 flex flex-col gap-2'>

        <h1 className='text-[20px] font-semibold'>Card Title</h1>
        <p className='text-[14px] line-clamp-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla sed voluptas quos libero consequatur saepe reprehenderit accusantium, id temporibus veritatis!</p>
        <button className='active:scale-[0.9] duration-500 cursor-pointer mt-2 w-fit rounded-md flex items-end justify-end text-[13px] bg-[#242424] text-white px-3 py-2 self-end'>Read more...</button>
      
    </div>
  )
}

export default PostCard
