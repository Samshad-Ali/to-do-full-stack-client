import React, {useState } from 'react'
import toast from 'react-hot-toast';
import { Link, Navigate, useNavigate } from 'react-router-dom'
import {axiosClient} from '../utils/axiosClient'
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from '../redux/slices/noteSlice';
const Signup = () => {
    const isAuthenticated = useSelector(state=>state.noteReducer.isAuthenticated);
    const loading = useSelector(state=>state.noteReducer.loading)
    const dispatch=useDispatch()
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const navigate=useNavigate();
    const handleSignupBtn=async(e)=>{
        e.preventDefault();
        try {
          dispatch(setLoading(true))
          const response=await axiosClient.post('/auth/register',{name,password,email});
          if(response.data.statusCode===401){
            navigate('/login')
            return toast.error(response.data.result)
          }
          if(response.data.statusCode===404 || response.data.statusCode===501){
            return toast.error(response.data.result)
          }
          toast.success(response.data.result)
          navigate('/login')
        } catch (error) {
          dispatch(setLoading(false))
          toast.error(error.message)
        }finally{
          dispatch(setLoading(false))
          setName('');
          setEmail('');
          setPassword('');
        }
    }
    if(isAuthenticated) return <Navigate to={'/'}/>;
    return(
        <div className="h-screen w-full flex flex-col justify-center items-center gap-4">
        <h2 className='text-2xl text-gray-800 font-bold border-b-2 border-gray-800'>Register</h2>
        <form onSubmit={handleSignupBtn} className="md:w-96 md:p-6 w-72 p-4 flex flex-col gap-2 border border-gray-800 rounded-sm bg-white">
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
    
          <button  className={`mt-4 bg-gray-800 text-white p-2 rounded-sm font-semibold hover:text-gray-800 hover:border hover:border-gray-800 hover:bg-white transition-all uppercase ${loading?'cursor-not-allowed':'cursor-pointer'}`} onClick={handleSignupBtn}>
            Register
          </button>
          <p className='self-end text-xs'>Already have account ? <Link className='underline' to={'/login'}>login</Link> </p>
        </form>
      </div>
    )
}

export default Signup