import React, { useEffect, useState } from 'react';
import Note from '../components/Note.jsx';
import CreateNote from '../components/CreateNote.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { axiosClient } from '../utils/axiosClient.js';
import toast from 'react-hot-toast';
import { setAuthenticated, setNotes } from '../redux/slices/noteSlice.js';
const Home = () => {
  const notes = useSelector(state=>state.noteReducer.notes);
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const [loader,setLoader] = useState(true);
  const fetchData=async()=>{
    try {
      const response = await axiosClient.get('/note/notes');
      if(response.data.statusCode===201){
        setLoader(false)
        return dispatch(setNotes(response.data.result))
      }
      dispatch(setAuthenticated(false))
      navigate('/login')
      return toast.error(response.data.result);
      } catch (error) {
      toast.error(error.message)
  }
  }
    useEffect(()=>{
     fetchData()
    },[])
  return (
    <main className='w-full flex justify-center items-center flex-col gap-4'>
    <h2 className='text-2xl'>Your Notes</h2>
    <div className='w-full p-4 flex flex-col gap-4 justify-center items-center'>
   <CreateNote/>
   {
    loader ? <p className='text-green-900 uppercase font-semibold'>Loading Notes...</p> :
      notes.length > 0 ?
      notes?.map((note)=><Note key={note?._id} note={note} />) :
      <h2 className='mt-4 text-2xl text-center text-red-600 font-bold'>No Notes Found, create Note first ☝️ </h2>
   }
    </div>
    </main>
  )
}

export default Home