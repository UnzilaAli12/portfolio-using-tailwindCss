import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
<div className='text-center py-20' >
  <h1 className='text-5xl font-extrabold text-gray-900' >
    Hi, I am <span className='text-indigo-600' >Unzila Ali</span>
    </h1> 
<p className='text-xl text-gray-600 mt-4 max-w-2xl mx-auto' >
A "Frontend Developer" with expertise in building modern, responsive, and interactive web applications using "Next.js, TypeScript, and Tailwind CSS".  
        Also a "Graphic Designer", crafting visually stunning and user-friendly interfaces.

</p>
<div className='mt-8'>
  <Link href='/Projects' target='_blank' className='bg-indigo-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-300 tansition'>
  View My Work
  </Link>
</div>
</div>
    </div>
  )
}

export default page
