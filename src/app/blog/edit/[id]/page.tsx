'use client'
import PostForm from '@/components/PostForm'
import React from 'react'

const EditPostPage = () => {

    const handelEdit =(data:any)=>{
        console.log(data)
    }

    return (
        <div className='w-full flex flex-col items-center'>
            <h1 className='text-[18px] lg:text-[30px] font-bold mb-8 text-center'>Edit Post</h1>
            <PostForm submit={handelEdit} isEdit={true} />
        </div>
    )
}

export default EditPostPage
