import React from 'react'
import { GrGoogle } from 'react-icons/gr'
import { PiGithubLogoBold } from 'react-icons/pi'

const SocialLogin = () => {
  return (
    <div>
        <h2 className='font-bold mb-5'>Login With</h2>
        <div className='space-y-3'>
            <button className='btn btn-outline btn-secondary w-full'> <GrGoogle size={24}/> Login With Google..</button>
            <button className='btn btn-outline btn-primary w-full'> <PiGithubLogoBold size={24}/> Login With Github..</button>
        </div>
    </div>
  )
}

export default SocialLogin