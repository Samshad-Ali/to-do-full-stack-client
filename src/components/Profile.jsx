import groot from '../assets/baby_groot.jpg'
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { axiosClient } from '../utils/axiosClient';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
const Profile = () => {
    const userData = useSelector(state=>state?.noteReducer?.user);
    return (
    <div className='w-full h-screen flex flex-col gap-6 justify-center items-center'>
        <img className='shadow-md shadow-slate-700 w-56 rounded-full h-56 object-cover' src={groot} />
        <div className='text-center shadow-md shadow-slate-700 bg-white rounded-sm p-1 px-4'>
        <h6 className='text-xl font-bold text-gray-800'>hello, <span className='uppercase text-green-800'>{userData?.name}</span></h6>
        <h6 className='font-semibold'>{userData?.email}</h6>
        </div>
    </div>

  )
}

export default Profile