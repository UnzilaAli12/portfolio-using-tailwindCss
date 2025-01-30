import React from 'react'
import Link from 'next/link';

const Header = () => {
      return (

        <header className='w-full bg-gray-900 text-white py-4 px-6 fixed shadow-md ' >
<div className='max-w-6xl mx-auto flex items-center justify-between text-2xl font-bold ' >
    <h1 className='fancy-logo text-3xl font-extrabold bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 text-transparent bg-clip-text tracking-wide   ' >
Unzila Ali
    </h1>
    <div className='space-x-6 text-lg ' >

<Link href="/" target='block' className='hover:text-gray-400'>Home</Link>
<Link href="/About" target='block' className='hover:text-gray-400'>About</Link>
<Link href="/Services" target='block' className='hover:text-gray-400'>Services</Link>
<Link href="/Contact" target='block' className='hover:text-gray-400'>Contact</Link>

</div>
    </div>
</header>
      );

      };

      export default Header;

