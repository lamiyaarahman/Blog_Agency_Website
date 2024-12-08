import React, { useState } from 'react'
import {NavLink ,Link} from 'react-router-dom'
// import { IconName } from "react-icons/fa6";
import { FaBars, FaXmark } from "react-icons/fa6";
import {useDispatch, useSelector} from 'react-redux';
import users from "../assets/users.jpg"


const Navbar = () => {

  
    const [isMenuOpen,setIsMenuOpen] = useState(false);
    const {user} = useSelector((state) => state.auth);
  

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  //NavItems

  const navItems = [
    {path:"/", link:"Home"},
    {path:"/blog", link:"Blog"},
    {path:"/about", link:"About"},
    {path:"/service", link:"Service"},
    {path:"/contact", link:"Contact"},
    
  ]
  return (
    <header className='bg-gray-500 fixed top-0 left-0 right-0'>
      <nav className='px-4 py-4 max-w-7xl mx-auto flex justify-around items-center'>
        <a href="/" className='text-2xl font-bold text-gray-800'>.blog<span className='text-white'>ME</span></a>


        <ul className='md:flex gap-12 text-lg hidden'>
              {
                navItems.map(({path,link}) => <li className='text-black' key={path}>
                  <NavLink className={({ isActive, isPending}) =>
                isActive 
                ? "active"
                : isPending 
                ? "pending" 
                : "" 
                } to={path}>{link}</NavLink>
                </li>)
              }
     

        {/* <div className='relative sm:w-72 w-40 space-x-2'>
            <IoSearchOutline className='absolute inline-block left-4 inset-y-2'/>
            <input type="text" placeholder='Search here' className="bg-white w-full py-1 md:px-8 px-6 rounded-full focus:outline-none"/>
        </div> */}

{/* {
          user && user.role === "user" ? (<li className='flex items-center gap-3'><img src={users} alt="" className='size-8'/>
          <button className='bg-gray-700 text-black'>Logout</button>
          </li>) : (<li>
          
          <Link className='bg-red-100 border-2 border-gray-500 px-6 py-2 font-medium rounded-lg hover:bg-gray-500 hover:text-white-500 transition-all duration-200 ease-in' to="/login">Log In</Link>
        </li>)
        } */}




        {
          user && user.role === "admin" ? (<li className='flex items-center gap-3'><img src={users} alt="" className='size-8'/>
          <Link to="/dashboard"><button className='bg-gray-700 text-black'>Dashboard</button></Link>
          </li>) : (<li>
          
          <Link className='bg-red-100 border-2 border-gray-500 px-6 py-2 font-medium rounded-lg hover:bg-gray-500 hover:text-white-500 transition-all duration-200 ease-in' to="/login">Log In</Link>
        </li>)
        }
        
        </ul>
        

      

        <div className='md:hidden'>
          <button onClick={toggleMenu} className='cursor pointer'>
            {
              isMenuOpen ?   <FaXmark className='w-5 h-5'/> : <FaBars className='w-5 h-5'/>
            }
          </button>  
        </div>



      </nav>

      <div>
      <ul className={`md:hidden gap-12 text-lg block space-y-5 px-4 py-6 mt-20  bg-white ${isMenuOpen ? "fixed top-0 left-0 max-w-7xl transition-all ease-out duration-150" : "hidden"}`}>
              {
                navItems.map(({path,link}) => <li className='text-black' key={path}>
                  <NavLink onClick={toggleMenu} to={path}>{link}</NavLink>
                </li>)
              }
        </ul>
      </div>
    </header>
  )
}

export default Navbar