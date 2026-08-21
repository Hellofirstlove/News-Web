import React from 'react'
import { GrGoogle } from 'react-icons/gr'
import { PiGithubLogoBold } from 'react-icons/pi'
import { Link } from 'react-router'

const SocialLogin = () => {
  return (
    <div className='p-4'>
        <h2 className='font-bold mb-5'>Login With</h2>
        <div className='space-y-3'>
            <Link to="/auth/login" className='btn btn-outline btn-secondary w-full'>
                <GrGoogle size={24}/> Login With Google
            </Link>
            <Link to="/auth/login" className='btn btn-outline btn-primary w-full'>
                <PiGithubLogoBold size={24}/> Login With Github
            </Link>
        </div>
    </div>
  )
}

export default SocialLogin