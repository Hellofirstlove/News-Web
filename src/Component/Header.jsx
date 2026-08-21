import React from 'react'
import logo from "../assets/logo.png"
import { format } from 'date-fns'
const Header = () => {
  return (
    <div className="flex justify-center flex-col items-center gap-3 py-4 px-4">
        <img className='w-full max-w-xs sm:max-w-sm md:max-w-md' src={logo} alt="Dragon News Logo" />
        <p className='text-accent text-sm sm:text-base text-center'>Journalism Without Fear or Favour</p>
        <p className='font-semibold text-base sm:text-xl text-center'>{format(new Date(), 'EEEE, MMMM d, yyyy')}</p>
    </div>
  )
}

export default Header