import React from 'react'
import home from "../assets/home.jpg"
import user from "../assets/user.jpg"
import users from "../assets/users.jpg"



const AboutPage = () => {
    return (
    <div>
    <div className='grid lg:grid-cols-2 grid-cols py-36 gap-2'>
            <div className='p-5  ml-24 mr-24'>
                <img className='w-full sm:w-22'  src={home} alt=""/>
            </div>

            <div className='p-5  ml-18 mr-12 px-4 py-20  mx-auto text-left text-gray-500'>
            <p className='text-1xl lg:text-2xl leading-snug  mb-5 '>Who we are</p>
            <h1 className='text-3xl lg:text-4xl leading-snug font-bold mb-5'>We provide high quality Articles and blogs</h1>
            <p className='text-xl lg:text-1xl leading-snug  mb-5'>Blogs are a type of regularly updated websites that provide insight into a certain topic. The word blog is a combined version of the words “web” and “log.” At their inception, blogs were simply an online diary where people could keep a log about their daily lives on the web.</p>
            </div>
    </div>
    <div>
    <h1 className='text-3xl lg:text-4xl text-gray-800 font-bold mb-5 ml-28 '>Top Authors</h1>
    <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols mt-20 mb-10'>
        
        
        <div className='p-8 ml-12 mr-12 shadow-xl rounded-2xl cursor-pointer text-center'>
            <img className='w-16 ml-20'  src={users} alt=""/>
            <h3 className='mt-4 mb-4 font-bold text-gray-600 cursor-pointer'>John Porter</h3>
            <p className='text-gray-600'>Director of Operations</p>
            <p className='text-md text-gray-900 mt-2'>12 Articles Published</p>
        </div>

        <div className='p-8 mr-12 ml-12  shadow-xl rounded-2xl cursor-pointer text-center'>
            <img className='w-16 ml-20'  src={user} alt=""/>
            <h3 className='mt-4 mb-4  font-bold text-gray-600 cursor-pointer'>Anelia Brown</h3>
            <p className='text-gray-600'>Head of Marketing</p>
            <p className='text-md text-gray-900 mt-2'>9 Articles Published</p>
        </div>

        <div className='p-8 ml-12 mr-12  shadow-xl rounded-2xl cursor-pointer text-center'>
            <img className='w-16 ml-20'  src={user} alt=""/>
            <h3 className='mt-4 mb-4 font-bold text-gray-600 cursor-pointer'>Jolly Antony</h3>
            <p className='text-gray-600'>Content Writer</p>
            <p className='text-md text-gray-900 mt-2'>6 Articles Published</p>
        </div>

        <div className='p-8 mr-12 ml-12  shadow-xl rounded-2xl cursor-pointer text-center'>
            <img className='w-16 ml-20'  src={users} alt=""/>
            <h3 className='mt-4 mb-4 font-bold text-gray-600 cursor-pointer'>Harry Porter</h3>
            <p className='text-gray-600'>Business Communication</p>
            <p className='text-md text-gray-900 mt'>10 Articles Published</p>
        </div>

        
        </div>


    </div>
    </div>



  )
}

export default AboutPage