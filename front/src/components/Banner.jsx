import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa6'


const Banner = () => {
  return (
    <div className='px-4 py-32 bg-red-100 mx-auto'>
      <div className='text-center text-gray-500' >
        <h1 className='text-3xl lg:text-6xl leading-snug font-bold mb-5'>Welcome to our Blog</h1>
        <p className='lg:w-3/5 mx-auto mb-5'>Join a group of authors and readers who are enthusiastic about sharing their thoughts and experiences by starting your own blog right now. We provide everything you need to get going, including tutorials and useful advice. </p>

        <div>
          <Link to="/" className='font-medium hover:text-gray-950 inline-flex items-center py-1'>Learn more <FaArrowRight className='mt-1 ml-2'/></Link>
        </div>
      </div>
    </div>
  )
}

export default Banner