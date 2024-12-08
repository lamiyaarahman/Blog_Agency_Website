import React from 'react'
import Layout from '../layout/layout'
import Blogs from '../components/Blogs'

const Blog = () => {
  return (
    <Layout>
      <div className='py-40 bg-red-100 text-center text-gray-500 px-4'>
      <h2 className='text-3xl lg:text-6xl leading-snug font-bold mb-5'> Blog Page</h2>
      </div>

      {/* ALL BLOGS CONTAINER */}

      <div className='max-w-7xl mx-auto'>
          <Blogs/>                                       
      </div>
    </Layout>
  )
}

export default Blog