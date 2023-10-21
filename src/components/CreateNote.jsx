import React, { useState } from 'react'
import {MdPhotoSizeSelectActual} from 'react-icons/md'

const CreateNote = () => {
    const [title,setTitle]=useState('');
    const [description,setDescription]=useState('');
    const handleCreateBtn=()=>{
    }
  return (
    <div className="sm:w-1/2 w-full flex flex-col gap-0 rounded-sm border bg-white shadow-md shadow-gray-400 p-2">
            <input 
            onChange={(e)=>{setTitle(e.target.value)}}
            value={title}
            className=' bg-transparent placeholder:text-gray-600 font-semibold text-gray-800 pl-2 p-1 overflow-hidden rounded-sm outline-none' type="text" placeholder='Title..' />
            <textarea 
            onChange={(e)=>{setDescription(e.target.value)}}
            value={description}
            className=' bg-transparent placeholder:text-gray-600 font-semibold text-gray-600 pl-2 p-1 overflow-hidden rounded-sm resize-none outline-none' placeholder='Description...' cols="30" rows="2"></textarea>
            <div className='w-fit'>
                <label htmlFor="image" className=' photoLabel text-2xl cursor-pointer '>
                    <MdPhotoSizeSelectActual/>
                </label>
                <input className='hidden' type="file" id='image' accept='image/*' />
            </div>
            <div className="w-full flex items-center justify-end mt-2">
                <button className="px-4 p-1 bg-white border border-teal-800 rounded-sm font-semibold text-teal-800 transition-all hover:bg-teal-800 hover:text-white"
                onClick={handleCreateBtn}
                >Create</button>
            </div>
        </div>
  )
}

export default CreateNote