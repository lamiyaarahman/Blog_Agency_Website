import React from 'react'
import Layout from '../layout/layout'
import ContactPage from '../components/ContactPage'

const Contact = () => {
  return (
    <Layout>
      {/* <div className='py-40 bg-red-100 text-center text-gray-500 px-4'>
      <h2 className='text-3xl lg:text-6xl leading-snug font-bold mb-5'> Contact Us Page</h2>
      </div> */}
      <ContactPage/>
    </Layout>
  )
}

export default Contact