import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {GiNotebook} from 'react-icons/gi'
import {axiosClient} from '../utils/axiosClient'
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthenticated } from '../redux/slices/noteSlice';
const Header = () => {
    const isAuthenticated = useSelector(state=>state?.noteReducer?.isAuthenticated);
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const handleLogoutBtn=async()=>{
        try {
            const response = await axiosClient.get('/auth/logout');
            toast.success(response.data.result);
            navigate('/login')
          
            dispatch(setAuthenticated(false));
        } catch (error) {
            toast.error(error.message)
        }
    }
  return (
    <nav className=' w-full h-12 z-30 sticky top-0 bg-gray-800 flex justify-between items-center px-4 text-white'>
        <h1 className='sm:text-3xl text-xl flex items-center gap-2'>To-Do<span><GiNotebook/></span> </h1>
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
                isAuthenticated ?    <button onClick={handleLogoutBtn} className='cursor-pointer bg-red-600 text-white p-1 px-4 rounded-sm font-semibold hover:scale-95 transition-all'>
                Logout
            </button> :
                           <li className='cursor-pointer bg-white text-gray-800 p-1 px-4 rounded-sm font-semibold hover:scale-95 transition-all'>
                           <Link to={'/login'}>Login</Link>
                       </li>
              }  
        </ul>
    </nav>
  )
}

export default Header