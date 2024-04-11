import PostCard from "@/components/PostCard"
import Link from "next/link"

const page = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>

      {
        [...Array(8)].map((_, index) => (
          <Link href={`/blog/blog-details/${index+1}`} key={index}>
            <PostCard />
          </Link>
        ))
      }

    </div>
  )
}

export default page
