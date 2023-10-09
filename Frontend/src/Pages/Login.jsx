import React from 'react'

const Login = () => {
  return (
    <div className='mt-4 grow flex items-center justify-around'>
      <div className='mb-32'>
      <h1 className='text-4xl text-center mb-4'>Login</h1>
      <form className='max-w-md mx-auto '>
        <input type="email" name="" id="" placeholder='Your email' />
        <input type="text" name="" id="" placeholder='password' />
        <button className='primary'>Login</button>
      </form>
      </div>

    </div>
  )
}

export default Login