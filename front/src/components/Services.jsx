import React from 'react'
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className='px-4 py-20  mx-auto'>
    <div className='text-center text-gray-500' >
      
      <p className='text-xl lg:text-1xl lg:w-3/5 mx-auto mb-3'>Our Services</p>
      <h1 className='text-3xl lg:text-4xl leading-snug font-bold mb-5'> What We Offer</h1>
      <p className='text-xl lg:text-1xl lg:w-3/5 mx-auto mb-5'>Our blogging agency services let you: Communicate with users on the web</p>

      <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cos-1 grid-cols mt-20'>
        
        
        <div className='p-8 ml-12 mr-12 shadow-xl rounded-2xl cursor-pointer'>
            <h3 className='mt-4 mb-4 font-bold text-gray-600 cursor-pointer'>Refreshing Design</h3>
            <p className='text-gray-800'>a service provided to you for a limited time for the purpose of evaluating that service.</p>
        </div>

        <div className='p-8 mr-12 ml-12  shadow-xl rounded-2xl cursor-pointer'>
            <h3 className='mt-4 mb-4  font-bold text-gray-600 cursor-pointer'>Based on Tailwind CSS </h3>
            <p className='text-gray-800'>a service provided to you for a 
              limited time for the purpose of evaluating that service.</p>
        </div>

        <div className='p-8 ml-12 mr-12  shadow-xl rounded-2xl cursor-pointer'>
            <h3 className='mt-4 mb-4 font-bold text-gray-600 cursor-pointer'>Speed Optimizes</h3>
            <p className='text-gray-800'>a service provided to you for a limited time for the purpose of evaluating that service.</p>
        </div>

        <div className='p-8 mr-12 ml-12  shadow-xl rounded-2xl cursor-pointer'>
            <h3 className='mt-4 mb-4 font-bold text-gray-600 cursor-pointer'>Fully customizable</h3>
            <p className='text-gray-800'>a service provided to you for a limited time for the purpose of evaluating that service.</p>
        </div>

        <div className='p-8 ml-12 mr-12 shadow-xl rounded-2xl cursor-pointer'>
            <h3 className='mt-4 mb-4 font-bold text-gray-600 cursor-pointer'>Regular Updates</h3>
            <p className='text-gray-800'>a service provided to you for a limited time for the purpose of evaluating that service.</p>
        </div>

        <div className='p-8 mr-12 ml-12 shadow-xl rounded-2xl cursor-pointer'>
            <h3 className='mt-4 mb-4 font-bold text-gray-600 cursor-pointer'>Responsive Web Design</h3>
            <p className='text-gray-800'>a service provided to you for a limited time for the purpose of evaluating that service.</p>
        
        </div>
        </div>



    
    </div>
  </div>
  )
}

export default Services