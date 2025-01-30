import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='py-20 max-w-5xl mx-auto text-center' >
      <h1 className='text-4xl font-extrabold text-gray-900' >My Services</h1>
      <p className='text-lg mt-6 text-gray-700'>
      I offer professional "Frontend Development" and "Graphic Design" services,  
      helping businesses and individuals build stunning digital experiences.
      </p>
      <div className='mt-12 grid grid-col-1 md:grid-col-2 gap-1' >
        <div className='bg-gray-100 p-6 rounded-lg shadow-md' >
<h2 className='text-3xl font-bold text-indigo-700'>
Frontend Development
</h2>
<p className='text-gray-700 mt-4'>
I specialize in building "modern, responsive, and high-performance" websites  
using "Next.js, TypeScript, and Tailwind CSS".  
My focus is on "clean code, user experience, and performance optimization".
</p>
<ul className='mt-4 text-gray-600 text-left space-y-2'>
<li>✅ Custom Web Applications</li>
            <li>✅ Responsive UI with Tailwind CSS</li>
            <li>✅ API Integration & Data Fetching</li>
            <li>✅ SEO & Performance Optimization</li>
            <li>✅ Next.js & React Expertise</li>
</ul>
        </div>
<div className='bg-gray-100 p-6 rounded-lg shadow-md mt-20'>
<h2 className='text-3xl font-bold text-indigo-700 ' >Graphic Design</h2>
<p className='text-gray-700 mt-4'>
With a strong "graphic design background", I create "eye-catching visuals"  
that enhance brand identity and user engagement.
</p>
<ul className='mt-4 text-gray-600 text-left space-y-2'>
<li>✅ Logo & Branding Design</li>
<li>✅ UI/UX Wireframing (Figma, Adobe XD)</li>
<li>✅ Social Media Graphics</li>
<li>✅ Business Cards & Print Materials</li>
<li>✅ Custom Illustrations & Visual Content</li> 
</ul>
</div>
      </div>
<div className='mt-12'>
<p className='text-lg text-gray-700'>Need a custom project? Let's work together! 🚀</p>
<Link href="/Contact" target='block' className='mt-4 inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition'>
Get in Touch
</Link>
</div>



    </div>
  )
}

export default page
