import React from 'react'
import { Link } from 'react-router-dom'
import {GiNotebook} from 'react-icons/gi'
const Header = () => {
  return (
    <nav className=' w-full h-12 sticky top-0 bg-gray-800 flex justify-between items-center px-4 text-white'>
        <h1 className='text-3xl flex items-center gap-2'>To-Do <span><GiNotebook/></span> </h1>
        <ul className='flex gap-4'>
            <li className='cursor-pointer bg-white text-gray-800 p-1 px-4 rounded-sm font-semibold hover:scale-95 transition-all'>
                <Link>Home</Link>
            </li>
            <li className='cursor-pointer bg-white text-gray-800 p-1 px-4 rounded-sm font-semibold hover:scale-95 transition-all'>
                <Link>Profile</Link>
            </li>
            <li className='cursor-pointer bg-white text-gray-800 p-1 px-4 rounded-sm font-semibold hover:scale-95 transition-all'>
                <Link>Logout</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Header