import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios";
const Register = () => {
  const [name , setname] = useState("");
  const [email,setemail]=useState("");
  const [password,setpassword]=useState("");
   async function Registeruser(ev) { 
    ev.preventDefault();
    try{
     await axios.post("/register",{
    name,
    email,
    password,
   })
   alert("registration completed , now you can log in");
    }
    catch{
      alert("registration failed , please try again");
    }

  }
  return (
    <div className='mt-4 grow flex items-center justify-around'>
    <div className='mb-32'>
    <h1 className='text-4xl text-center mb-4'>Register</h1>
    <form className='max-w-md mx-auto ' onSubmit={Registeruser}>
    <input type="text" name="" id=""
     placeholder='Your name'
     value={name}
     onChange={ev=>setname(ev.target.value)} />
      <input type="email" name="" id=""
       placeholder='Your email' 
       value={email}
       onChange={ev =>setemail(ev.target.value)}/>
      <input type="text" name="" id=""
       placeholder='password'
       value={password}
       onChange={ev =>setpassword(ev.target.value) } />
      <button className='primary' >Register</button>
      <div className='text-center py-2 text-gray-500'>
          Already have an account ?  <Link className='text-black underline' to={'/login'}>Login</Link></div>
    </form>
    </div>

  </div>
  )
}

export default Register