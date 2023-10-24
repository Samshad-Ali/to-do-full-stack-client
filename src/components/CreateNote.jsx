import React, { useState } from 'react'
import {MdPhotoSizeSelectActual} from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux';
import { setLoading, setRefresh } from '../redux/slices/noteSlice';
import { axiosClient } from '../utils/axiosClient';
import toast from 'react-hot-toast';

const CreateNote = () => {
    const [title,setTitle]=useState('');
    const [description,setDescription]=useState('');
    const [img,setPostImg] = useState('');
    const dispatch=useDispatch();
  const refresh = useSelector(state=>state.noteReducer.refresh);
    const loading = useSelector(state=>state.noteReducer.loading);
    // handleimg------------
    const handlePostImageChange = (e) =>{
        const file = e.target.files[0];
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file); 
        fileReader.onload=()=>{
            if(fileReader.readyState === fileReader.DONE){
                setPostImg(fileReader.result);
            }
        }
      } 
    //   ---------createbtn-------------------
    const handleCreateBtn=async()=>{
        try {
            dispatch(setLoading(true))
            const response = await axiosClient.post('/note/create',{
                img ,title,description
            })
            if(response.data.statusCode===404 || response.data.statusCode==501){
                return toast.error(response.data.result)
            }
            toast.success(response.data.result)
            dispatch(setRefresh(!refresh))
           return dispatch(setLoading(false))
        } catch (error) {
            dispatch(setLoading(false))
            toast.error(error.message)
        }finally{
            dispatch(setLoading(false))
            setTitle('')
            setDescription('')
            setPostImg('')
        }
    }
  return (
    <div className="sm:w-1/2 w-full flex flex-col gap-0 rounded-sm border bg-white shadow-md shadow-gray-400 p-2">
            <input 
            onChange={(e)=>{setTitle(e.target.value)}}
            value={title}
            className=' bg-transparent placeholder:text-gray-600 font-semibold text-gray-800 pl-2 p-1 overflow-hidden rounded-sm outline-none ' type="text" placeholder='Title..' />
            <textarea 
            onChange={(e)=>{setDescription(e.target.value)}}
            value={description}
            className=' bg-transparent placeholder:text-gray-600 font-semibold text-gray-600 pl-2 p-1 overflow-hidden rounded-sm resize-none outline-none ' placeholder='Description...' cols="30" rows="2"></textarea>
            <div className='w-fit'>
                <label htmlFor="image" className=' photoLabel text-2xl cursor-pointer '>
                    <MdPhotoSizeSelectActual/>
                </label>
                <input className='hidden' type="file" id='image' accept='image/*' onChange={handlePostImageChange} />
            </div>
            <div className="w-full flex items-center justify-end mt-2">
                <button className={`px-4 p-1 bg-white border border-teal-800 rounded-sm font-semibold text-teal-800 transition-all hover:bg-teal-800 hover:text-white ${loading?'cursor-not-allowed':"cursor-pointer"}`}
                onClick={handleCreateBtn}
                >Create</button>
            </div>
        </div>
  )
}

export default CreateNote