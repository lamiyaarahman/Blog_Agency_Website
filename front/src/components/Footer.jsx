import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='bg-gray-500 mb-1'>
      <div className='px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4'>
        <div>
          <div className='grid grid-cols-2 gap-5 lg:col-span-4 md:grid-cols-4'>
            <div>
              <p className='font-bold tracking-wide text-gray-300'>Category</p>
                <ul className='mt-2 space-y-2'>
                  <li>
                      <a href="/" className='text-gray-300 transition-colors duration-300 hover:text-white'>News</a>
                  </li>

                  <li>
                      <a href="/" className='text-gray-300 transition-colors duration-300 hover:text-white'>World</a>
                  </li>

                  <li>
                      <a href="/" className='text-gray-300 transition-colors duration-300 hover:text-white'>Games</a>
                  </li>

                  <li>
                      <a href="/" className='text-gray-300 transition-colors duration-300 hover:text-white'>References</a>
                  </li>
                </ul>
              
            </div>
            <div>
              <p className='font-medium tracking-wide text-gray-300'>Category</p>
                <ul className='mt-2 space-y-2'>
                  <li>
                      <a href="/" className='text-gray-300 transition-colors duration-300 hover:text-white'>Wed</a>
                  </li>

                  <li>
                      <a href="/" className='text-gray-300 transition-colors duration-300 hover:text-white'>Business</a>
                  </li>

                  <li>
                      <a href="/" className='text-gray-300 transition-colors duration-300 hover:text-white'>ECommerce</a>
                  </li>

                  <li>
                      <a href="/" className='text-gray-300 transition-colors duration-300 hover:text-white'>Entertainment</a>
                  </li>
                </ul>
              
            </div>

            <div>
              <p className='font-medium tracking-wide text-gray-300'>Category</p>
                <ul className='mt-2 space-y-2'>
                  <li>
                      <a href="/" className='text-gray-300 transition-colors duration-300 hover:text-white'>Media</a>
                  </li>

                  <li>
                      <a href="/" className='text-gray-300 transition-colors duration-300 hover:text-white'>Education</a>
                  </li>

                  <li>
                      <a href="/" className='text-gray-300 transition-colors duration-300 hover:text-white'>Brochure</a>
                  </li>

                  <li>
                      <a href="/" className='text-gray-300 transition-colors duration-300 hover:text-white'>Engineer</a>
                  </li>
                </ul>
              
            </div>
            <div className='text-white font-bold text-sm'>
                <p>Copyright 2024 | All right reserved.</p>
                <div className='flex gap-3 mt-3 items-center justify-center sm:mt-3'>
                  <a href="" className='text-gray-900 transition-all duration-300 hover:text-white'><FaTwitter className='h-6 w-6'/></a>
                  <a href="" className='text-gray-900 transition-all duration-300 hover:text-white'><FaInstagram className='h-6 w-6'/></a>
                  <a href="" className='text-gray-900 transition-all duration-300 hover:text-white'><FaFacebook className='h-6 w-6'/></a>
                </div>
            </div>
          </div>
        </div>

        

      </div>
    </div>
    
  )
}

export default Footer