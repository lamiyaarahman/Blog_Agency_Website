import React, { useEffect, useState } from 'react'
import { useFetchBlogsQuery } from '../redux/features/blogs/blogsApi';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa6';


const Blogs = () => {
  const [Blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState('');
  const [category, setcategory] = useState('');
  const [query, setquery] = useState('');


  //get data using redux

  const {data: blogs = [], error, isLoading}  = useFetchBlogsQuery(query);
  console.log(blogs);
  

//   useEffect(() => {
//     // Fetch blogs from your API
//     fetch('http://localhost:5000/api/blogs')
//         .then(response => response.json())
//         .then(data => {
//             setBlogs(data); // Ensure data is an array
//         })
//         .catch(error => {
//             console.error('Error fetching blogs:', error);
//         });
// }, []);
  
  return (
    <div>
      <div></div>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error.toString}</div>}
      <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cos-1 grid-cols gap-8 mt-4'>
      {
        blogs.map((blog) => 
        <Link
        to={`blogs/${blog._id}`}
        key={blog.id} className='p-5 shadow-lg rounded cursor-pointer'>
          <div>
            <img src={blog.image} alt="" className='w-full'/>
          </div>
          <h3 className='mt-4 mb-4 font-bold hover:text-blue-600 cursor-pointer'>{blog.title}</h3>
          <p className='mb-2 text-gray-500'><FaUser className='inline-flex items-center mr-2'/>{blog.author}</p>
          
          
          <p className='text-gray-700 hover:text-gray-950'>{blog.content}</p>
          
          <p className='text-sm text-gray-600'>Published: {blog.published_date}</p>
          <p className='text-gray-700'>{blog.reading_time}</p>
        </Link>)
      }
    </div>  
      <div>
        {/* <BlogCards blogs={blogs} /> */}
      </div>
    
    </div>
  )
}

export default Blogs