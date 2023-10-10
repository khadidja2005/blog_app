import React from 'react'
import { Link } from 'react-router-dom'
const Register = () => {
  return (
    <div className='mt-4 grow flex items-center justify-around'>
    <div className='mb-32'>
    <h1 className='text-4xl text-center mb-4'>Register</h1>
    <form className='max-w-md mx-auto '>
    <input type="text" name="" id="" placeholder='Your name' />
      <input type="email" name="" id="" placeholder='Your email' />
      <input type="text" name="" id="" placeholder='password' />
      <button className='primary'>Register</button>
      <div className='text-center py-2 text-gray-500'>
          Already have an account ?  <Link className='text-black underline' to={'/login'}>Login</Link></div>
    </form>
    </div>

  </div>
  )
}

export default Register