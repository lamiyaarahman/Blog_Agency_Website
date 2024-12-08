import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import Blog from './page/Blog'
import Contact from './page/Contact'
import Service from './page/Service'
import About from './page/About'
import LogIn from './page/LogIn'
import Register from './page/Register'
import SingleBlog from './page/SingleBlog'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/service" element={<Service/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/login" element={<LogIn/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/blogs/:id" element={<SingleBlog/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App