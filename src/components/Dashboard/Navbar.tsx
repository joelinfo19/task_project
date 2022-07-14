import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='flex flex-col w-full overflow-x-auto'>
      <header className=' bg-[#f7f8fc] py-2 '>
        <div className='flex items-center justify-between mx-1 h-full md:mx-5'>
          <div className='flex items-center justify-center'>
            <Link to={'/'}>
              <span className=' mx-3 font-semibold text-lg sm:text-xl relative'>Tareas</span>
            </Link>
            <Link to={'/foro'}>
              <span className='font-semibold text-lg sm:text-xl relative'>
                Foro
                <div className='w-2 h-2 absolute top-0 -right-2 rounded-full bg-[#f39e2f]'></div>
              </span>
            </Link>
          </div>
          <div className='flex items-center'>
            <i className="fa-solid fa-bell text-xl mx-3 sm:text-2xl sm:mx-5"></i>
            <img className='w-9 h-9 rounded-full object-cover transform -scale-x-[1] sm:w-10 sm:h-10' src="https://www.rawstory.com/media-library/less-than-p-greater-than-a-virtual-avatar-of-facebook-ceo-mark-zuckerberg-less-than-p-greater-than.jpg?id=27823865" alt="" />
          </div>
        </div>
      </header>
    </div>
  )
}
