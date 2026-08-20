import React from 'react'
import { Link } from 'react-router'

const Login = () => {
    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <div className="card-body">
                    <h2 className='text-2xl font-bold text-center'>Login Your Account</h2>
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Login</button>
                        <p className="text-center pt-3">Don't have an account? <Link to="/auth/register" className='link link-primary text-secondary'> Register</Link></p>
                    </fieldset>
                </div>
            </div>
        </div>
    )
}

export default Login