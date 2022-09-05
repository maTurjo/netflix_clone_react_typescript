import React from 'react'

const Navbar:React.FC = () => {
  return (
    <div className='flex justify-center md:justify-between items-center container px-10 mx-auto py-5 bg-transparent z-50'>
        <h1 className='text-red-600 text-4xl font-bold cursor-pointer tracking-widest'>NETFLIX</h1>
        <div className='hidden md:block'>
            <button className='text-white mx-6 text-lg tracking-wide'>Sign In</button>
            <button className='bg-red-600 text-white cursor-pointer rounded px-6 py-2 text-lg tracking-wide'>Sign Up</button>
        </div>
    </div>
  )
}

export default Navbar