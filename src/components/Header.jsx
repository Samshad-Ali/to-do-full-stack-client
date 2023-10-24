import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { GiNotebook} from 'react-icons/gi'
import { FaBars} from 'react-icons/fa'
import {axiosClient} from '../utils/axiosClient'
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthenticated, setLoading } from '../redux/slices/noteSlice';
const Header = () => {
    const isAuthenticated = useSelector(state=>state?.noteReducer?.isAuthenticated);
    const loading = useSelector(state=>state.noteReducer.loading)
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const [bar,setBar]=useState(false)
    const handleLogoutBtn=async()=>{
        try {
            dispatch(setLoading(true))
            setBar(false)
            const response = await axiosClient.get('/auth/logout');
            toast.success(response.data.result);
            navigate('/login') 
            dispatch(setAuthenticated(false));
            dispatch(setLoading(false))
        } catch (error) {
            toast.error(error.message)
        }
    }
  return (
    <>
    <nav className=' w-full h-12 z-30 sticky top-0 bg-gray-800 flex justify-between items-center px-4 text-white'>
        <h1 className='sm:text-3xl text-xl flex items-center gap-2'>To-Do<span><GiNotebook/></span> </h1>
        <span onClick={()=>{setBar(pre=>!pre)}} className='text-lg sm:hidden'>
            <FaBars/>
        </span>
        <ul className='sm:flex hidden gap-4'>
            {
                isAuthenticated ? <>
                   <li className='cursor-pointer bg-white text-gray-800 p-1 px-4 rounded-sm font-semibold hover:scale-95 transition-all'>
                <Link to={'/'}>Home</Link>
            </li>
            <li className='cursor-pointer bg-white text-gray-800 p-1 px-4 rounded-sm font-semibold hover:scale-95 transition-all'>
                <Link to={'/profile'}>Profile</Link>
            </li>
                </>
                : ""
            }
              {
                  isAuthenticated ?    <button onClick={handleLogoutBtn} className={`bg-red-600 text-white p-1 px-4 rounded-sm font-semibold hover:scale-95 transition-all ${loading?'cursor-not-allowed':'cursor-pointer'}`}>
                Logout
            </button> :
                           <li className='cursor-pointer bg-white text-gray-800 p-1 px-4 rounded-sm font-semibold hover:scale-95 transition-all'>
                           <Link to={'/login'}>Login</Link>
                       </li>
              }  
        </ul>
    </nav>
      {/* phone nav */}
      <ul className={`sm:hidden flex-col z-10 top-12 py-4 transition-all bg-gray-800 -translate-y-full
        w-full right-0 absolute justify-center items-center flex gap-4 ${bar?'translate-y-0':'-translate-y-full'}`}>
            {
                isAuthenticated ? <>
                   <li
                   onClick={()=>{setBar(false)}}
                   className='cursor-pointer bg-white text-gray-800 p-1 px-4 rounded-sm font-semibold hover:scale-95 transition-all'>
                <Link to={'/'}>Home</Link>
            </li>
            <li
            onClick={()=>{setBar(false)}}
            className='cursor-pointer bg-white text-gray-800 p-1 px-4 rounded-sm font-semibold hover:scale-95 transition-all'>
                <Link to={'/profile'}>Profile</Link>
            </li>
                </>
                : ""
            }
              {
                isAuthenticated ?    <button onClick={handleLogoutBtn} className={`bg-red-600 text-white p-1 px-4 rounded-sm font-semibold hover:scale-95 transition-all ${loading?'cursor-not-allowed':'cursor-pointer'}`}
                >
                Logout
            </button> :
                           <li
                           onClick={()=>{setBar(false)}}
                           className='cursor-pointer bg-white text-gray-800 p-1 px-4 rounded-sm font-semibold hover:scale-95 transition-all'>
                           <Link to={'/login'}>Login</Link>
                       </li>
              }  
        </ul>
 </>

  )
}

export default Header