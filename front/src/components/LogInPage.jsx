import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {useLoginUserMutation} from '../redux/features/auth/authApi';
import { useDispatch } from 'react-redux';

const LogInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loginUser, {isLoading: loginLoading}] = useLoginUserMutation()

  const dispatch = useDispatch()

  const navigate = useNavigate()


  const handleLogin = async (e) => {
    e.preventDefault();
    const data = {
      email,
      password
}
      try{
         const response = await loginUser(data).unwrap();
         console.log(response)
         const {token, user} = response;
         dispatch(setUser({user}))
         alert("Login Successful");
         navigate('/')
   } catch(error){
         setMessage("Please provide a valid email and password")
   }
  }

  return (
    
    <div >
      

<form onSubmit={handleLogin} class="max-w-md mx-auto mt-48">
          <h1 className='font-bold text-2xl mb-7 text-gray-700'> Please Log In</h1>
<div class="grid md:grid-cols-2 md:gap-6">
    
    
  </div>

  <div class="relative z-0 w-full mb-5 group">
      <input type="email" value={email} name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required  onChange={(e) => setEmail(e.target.value)} />
      <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
  </div>
  <div class="relative z-0 w-full mb-5 group">
      <input type="password" value={password} name="floating_password" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={(e) => setPassword(e.target.value)} required />
      <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
  </div>
  {
    message && <p className='text-black'>{message}</p>
  }


  
  <button disabled={loginLoading} type="submit" class="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800 mb-9">Log In</button>
</form>

<p className='text-center text-gray-700 mb-14'>Dont't have an account ? <Link to="/register" className='text-gray-800 text-lg'>Register</Link> here.</p>

    </div>
    
  )
}

export default LogInPage