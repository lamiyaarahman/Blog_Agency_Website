import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetchBlogByIdQuery } from '../redux/features/blogs/blogsApi';
import { FaUser } from 'react-icons/fa6';

const SingleBlog = () => {

  const {id} = useParams();
  //console.log(id)
  const {data:blog, error, isLoading} = useFetchBlogByIdQuery(id);
  console.log(blog)
  return (
    <div className='text-primary mx-auto container mt-8'>
      <div>
        {isLoading && <div>Loading........</div>}
        {error && <div>Something went wrong</div>}
        {
          blog?.post && (
            <div>
              <div>


          <p className='mb-2 text-gray-500'><FaUser className='inline-flex items-center mr-2'/>{blog.post.author}</p>
          <div>
            <img src={blog.post.image} alt="" className='w-80'/>
          </div>
          <p className='text-lg'>{blog.post.content}</p>
              
              <h3 className='mt-4 mb-4 font-bold hover:text-blue-600 cursor-pointer'>{blog.post.title}</h3>
          
          <p className='text-gray-700 hover:text-gray-950'>{blog.post.content}</p>
          
          <p className='text-sm text-gray-600'>Published: {blog.post.published_date}</p>
          <p className='text-gray-700'>{blog.post.reading_time}</p>
                
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default SingleBlog