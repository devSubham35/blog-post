'use client'
import React, { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

export type FormPostInputs = {
  title: string,
  content: string,
  tag: string,
}

interface PostFormProps {
  submit: SubmitHandler<FormPostInputs>
  isEdit?: boolean
}



const PostForm: FC <PostFormProps> = ({ submit, isEdit }) => {

  const { register, handleSubmit } = useForm<FormPostInputs>()

  return (

    <form onSubmit={handleSubmit(submit)} className='w-[100%] md:w-[70%] xl:w-[50%] flex flex-col gap-4'>

      <input
        {...register("title", { required: true})}
        type="text"
        placeholder="Post Title"
        className="min-h-12 px-4 border-[2px] rounded-lg focus:outline-none w-full font-semibold"
      />

      <textarea
        {...register("content", { required: true})}
        placeholder="Post Details"
        className="text-[14px] p-4 border-[2px] rounded-lg focus:outline-none w-full"
      />

      <select defaultValue="" {...register("tag", { required: true})} className="rounded-lg py-3 px-3 border-[2px] w-full focus:outline-none text-[#a9a9a9]">
        <option disabled value="" className='text-[14px] text-[#ababab]'>Selet tags</option>
        <option className='py-2 text-[14px]'>Java Script</option>
        <option className='py-2 text-[14px]'>React Js</option>
        <option className='py-2 text-[14px]'>Next Js</option>
      </select>


      <button type='submit' className='w-full active:scale-[0.95] duration-300 cursor-pointer py-3 px-4 rounded-lg items-center bg-[#000000] text-white'>
         {isEdit? "Update Post" : "Create Post"}
      </button>

    </form>
  )
}

export default PostForm
