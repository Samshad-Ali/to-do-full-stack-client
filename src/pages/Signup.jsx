import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom'

const Signup = () => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const handleSignupBtn=(e)=>{
        e.preventDefault();
        try {
            console.log(name,email,password)
        } catch (error) {
            toast.error(error.message)
        }finally{
            setName('')
            setEmail('')
            setPassword('')
        }
    }
    return(
        <div className="h-screen w-full flex flex-col justify-center items-center gap-4">
        <h2 className='text-2xl text-gray-800 font-bold border-b-2 border-gray-800'>Register</h2>
        <form onSubmit={handleSignupBtn} className="md:w-96 md:p-6 w-72 p-4 flex flex-col gap-2 border border-gray-800 rounded-sm">
          <div className='flex flex-col gap-0'>
            <label className=' text-sm text-gray-800 font-semibold ' htmlFor="email">Name</label>
            <input className='border p-1 border-gray-800 rounded-sm pl-2 outline-none' type="text" name="name" id="name"
            required
            value={name}
            onChange={(e)=>{setName(e.target.value)}}
            />
          </div>
          <div className='flex flex-col gap-0'>
            <label className=' text-sm text-gray-800 font-semibold ' htmlFor="email">Email</label>
            <input className='border p-1 border-gray-800 rounded-sm pl-2 outline-none' type="email" name="email" id="email"
            required
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
            />
          </div>
          <div className='flex flex-col gap-0'>
            <label className=' text-sm text-gray-800 font-semibold ' htmlFor="password">Password</label>
            <input className='border p-1 border-gray-800 rounded-sm pl-2 outline-none' type="password" name="password" id="password"
            required
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
            />
          </div>
          <input className='mt-4 bg-gray-800 text-white p-2 rounded-sm font-semibold hover:text-gray-800 hover:border hover:border-gray-800 hover:bg-white transition-all cursor-pointer uppercase' onClick={handleSignupBtn} type="submit" value={"Register"}/>
          <p className='self-end text-xs'>Already have account ? <Link className='underline' to={'/login'}>login</Link> </p>
        </form>
      </div>
    )
}

export default Signup