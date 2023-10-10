import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='mt-4 grow flex items-center justify-around'>
      <div className='mb-32'>
      <h1 className='text-4xl text-center mb-4'>Login</h1>
      <form className='max-w-md mx-auto '>
        <input type="email" name="" id="" placeholder='Your email' />
        <input type="text" name="" id="" placeholder='password' />
        <button className='primary'>Login</button>
        <div className='text-center py-2 text-gray-500'>
          Don't have an account yet?  <Link className='text-black underline' to={'/register'}>register</Link></div>
      </form>
      </div>

    </div>
  )
}

export default Login