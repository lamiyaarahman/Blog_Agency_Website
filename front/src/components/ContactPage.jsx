import React from 'react'
import contact from "../assets/contact.jpg"

const ContactPage = () => {
  return (
    <div className='grid lg:grid-cols-2 grid-cols py-36 gap-2'>
            <div className='p-5  ml-24 mr-24'>
                <img className='w-full sm:w-22'  src={contact} alt=""/>
            </div>

            


  <div>
  <form class="max-w-sm mx-auto">
  <div class="mb-5">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600">Your email</label>
    <input type="email" id="email" class="bg-gray-500 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-700 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
  </div>
  <div class="mb-5">
    <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600">Full Name</label>
    <input type="text" id="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-700 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"  placeholder="Full Name" required />
  </div>

  <div class="mb-5">
    <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600">Subject</label>
    <input type="text" id="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-wite dark:border-gray-600 dark:placeholder-gray-700 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"  placeholder="Enter your subject" required />
  </div>

  
    
<div class="mb-5">
  <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600">Your message</label>
  <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-700 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
</div>


  
  <button type="submit" class="text-white bg-gray-700 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring--800">Submit</button>
</form>
</div>

    </div>
  )
}

export default ContactPage