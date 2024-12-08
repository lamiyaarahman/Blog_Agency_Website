import React from 'react'
import Layout from '../layout/layout'
import Services from '../components/Services'

const Service = () => {
  return (
    <Layout>
      <div className='py-40 bg-red-100 text-center text-gray-500 px-4'>
      <h2 className='text-3xl lg:text-6xl leading-snug font-bold mb-5'> Service Page</h2>
      </div>
      <Services/>
    </Layout>
  )
}

export default Service