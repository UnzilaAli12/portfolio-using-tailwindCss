import React from 'react'

const page = () => {
  return (
    <div className='py-20'>
    <h1 className='text-4xl font-extrabold text-center'>Conatct Me</h1>
      <p className='mt-4 text-lg text-center'>Feel free to reach out for collaborations!</p>
      <form className='max-w-lg mt-6 space-y-4 mx-auto ' >
      <input type="text" placeholder="Your Name" className="w-full p-2 border border-gray-300 rounded"/>
        <input type="email" placeholder="Your Email" className="w-full p-2 border border-gray-300 rounded"/>
        <textarea placeholder="Your Message" className="w-full p-2 border border-gray-300 rounded"></textarea>
        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">
          Send Message
        </button>
      </form>
    </div>
  )
}

export default page
