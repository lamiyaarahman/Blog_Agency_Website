import React from 'react'
import Layout from '../layout/layout'
import Banner from '../components/Banner'
import Blogs from '../components/Blogs'

const Home = () => {
  return (
    <Layout>
      <Banner/>
      <div className='max-w-7xl mx-auto'>
      <Blogs/>
      </div>
      
    </Layout>
  )
}

export default Home